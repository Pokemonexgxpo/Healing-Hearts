import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import useWebSocket from "@/hooks/useWebSocket";
import type { Message } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatRoom() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const { data: initialMessages = [] } = useQuery<Message[]>({
    queryKey: ['/api/messages'],
    enabled: isJoined,
  });

  const { messages, sendMessage, isConnected } = useWebSocket(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleJoinChat = () => {
    if (!username.trim()) {
      toast({
        title: "Error",
        description: "Please enter a username to join the chat.",
        variant: "destructive",
      });
      return;
    }
    setIsJoined(true);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast({
        title: "Error", 
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    if (!isConnected) {
      toast({
        title: "Connection Error",
        description: "Unable to send message. Please check your connection.",
        variant: "destructive",
      });
      return;
    }

    sendMessage({
      username: username.trim(),
      content: message.trim()
    });
    
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isJoined) {
        handleSendMessage();
      } else {
        handleJoinChat();
      }
    }
  };

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'from-primary to-secondary',
      'from-green-400 to-emerald-500',
      'from-purple-400 to-pink-500',
      'from-yellow-400 to-orange-500',
      'from-blue-400 to-indigo-500',
      'from-teal-400 to-cyan-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  if (!isJoined) {
    return (
      <section id="chat" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Support Chat</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with others who understand your struggles. Share experiences and support each other.
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Join the Conversation</h3>
            <div className="space-y-4">
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username..."
                onKeyPress={handleKeyPress}
                data-testid="input-username"
              />
              <Button 
                onClick={handleJoinChat}
                className="w-full"
                data-testid="button-join-chat"
              >
                Join Chat Room
              </Button>
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Chat Guidelines</h4>
              <ul className="space-y-1 text-blue-800 text-sm">
                <li>• Be respectful and supportive</li>
                <li>• No harmful or inappropriate content</li>
                <li>• Respect privacy</li>
                <li>• Report concerning behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="chat" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Support Chat</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connected as <strong>{username}</strong> • {isConnected ? 'Online' : 'Connecting...'}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">Support Chat Room</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className="text-blue-100 text-sm">
                  {isConnected ? 'Connected' : 'Connecting...'}
                </span>
              </div>
            </div>
            <p className="text-blue-100 text-sm mt-1">Guidelines: Be kind, supportive, and respectful. No harmful content.</p>
          </div>
          
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50" data-testid="chat-messages">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>No messages yet. Be the first to share something supportive! 💙</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={`${msg.username}-${msg.timestamp?.getTime()}`} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${getAvatarColor(msg.username)} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                    {getInitials(msg.username)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900" data-testid={`text-username-${msg.username}`}>
                        {msg.username}
                      </span>
                      <span className="text-xs text-gray-500">
                        {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : 'Now'}
                      </span>
                    </div>
                    <p className="text-gray-700" data-testid="text-message-content">{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-4">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a supportive message..."
                onKeyPress={handleKeyPress}
                disabled={!isConnected}
                data-testid="input-message"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!isConnected || !message.trim()}
                data-testid="button-send-message"
              >
                Send
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This chat is moderated for safety. Please be kind and supportive to all participants.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Community Guidelines</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Be respectful and supportive to all participants</li>
            <li>• No harmful, discriminatory, or inappropriate content</li>
            <li>• Respect privacy - don't share personal information</li>
            <li>• If you're in crisis, please contact professional resources immediately</li>
            <li>• Report any concerning behavior to moderators</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
