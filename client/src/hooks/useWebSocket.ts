import { useState, useEffect, useRef, useCallback } from "react";
import type { Message, InsertMessage } from "@shared/schema";

export default function useWebSocket(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;
  const hasInitialized = useRef(false);

  const connect = useCallback(() => {
    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/ws`;
      
      ws.current = new WebSocket(wsUrl);

      ws.current.onopen = () => {
        console.log('Connected to chat WebSocket');
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;
      };

      ws.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.error) {
            console.error('WebSocket error:', data.error);
            return;
          }
          
          const message: Message = {
            ...data,
            timestamp: data.timestamp ? new Date(data.timestamp) : new Date()
          };
          setMessages(prev => {
            // Avoid duplicates
            const exists = prev.some(msg => 
              msg.username === message.username && 
              msg.content === message.content &&
              Math.abs((msg.timestamp?.getTime() || 0) - (message.timestamp?.getTime() || 0)) < 1000
            );
            
            if (exists) return prev;
            return [...prev, message];
          });
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      const handleReconnect = () => {
        if (reconnectAttemptsRef.current < maxReconnectAttempts) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttemptsRef.current++;
            connect();
          }, delay);
        }
      };

      ws.current.onclose = () => {
        console.log('Disconnected from chat WebSocket');
        setIsConnected(false);
        handleReconnect();
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnected(false);
      };
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
      setIsConnected(false);
    }
  }, []);

  useEffect(() => {
    connect();
    
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (initialMessages.length > 0 && !hasInitialized.current) {
      setMessages(initialMessages);
      hasInitialized.current = true;
    }
  }, [initialMessages]);

  const sendMessage = useCallback((messageData: InsertMessage) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(messageData));
    } else {
      console.error('WebSocket is not connected');
    }
  }, []);

  return {
    messages,
    sendMessage,
    isConnected
  };
}
