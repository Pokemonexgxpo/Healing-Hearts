import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Quote, InsertQuote } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function QuotesSection() {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const { toast } = useToast();

  const { data: quotes = [], isLoading } = useQuery<Quote[]>({
    queryKey: ['/api/quotes'],
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (quoteData: InsertQuote) => {
      const response = await apiRequest('POST', '/api/quotes', quoteData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote submitted!",
        description: "Your quote has been submitted for review and will appear once approved.",
      });
      setNewQuote("");
      setNewAuthor("");
      queryClient.invalidateQueries({ queryKey: ['/api/quotes'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmitQuote = () => {
    if (!newQuote.trim()) {
      toast({
        title: "Error",
        description: "Please enter a quote before submitting.",
        variant: "destructive",
      });
      return;
    }

    submitQuoteMutation.mutate({
      text: newQuote.trim(),
      author: newAuthor.trim() || "Anonymous"
    });
  };

  return (
    <section id="quotes" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspirational Quotes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Words of encouragement and wisdom to lift your spirits</p>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {quotes.map((quote, index) => {
              const gradients = [
                'from-blue-50 to-indigo-50 border-blue-100',
                'from-green-50 to-emerald-50 border-green-100',
                'from-purple-50 to-violet-50 border-purple-100',
                'from-rose-50 to-pink-50 border-rose-100',
                'from-yellow-50 to-amber-50 border-yellow-100',
                'from-teal-50 to-cyan-50 border-teal-100'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div 
                  key={quote.id} 
                  className={`quote-card bg-gradient-to-br ${gradient} rounded-2xl p-6 border transform hover:scale-105 transition duration-200`}
                  data-testid={`card-quote-${index}`}
                >
                  <blockquote className="text-gray-700 text-lg italic mb-4">"{quote.text}"</blockquote>
                  <cite className="text-sm text-gray-500">- {quote.author}</cite>
                </div>
              );
            })}
          </div>
        )}
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-warmGray rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Share Your Favorite Quote</h3>
            <p className="text-gray-600 mb-6 text-center">Help inspire others by sharing a quote that helps you</p>
            <div className="space-y-4">
              <Textarea 
                value={newQuote}
                onChange={(e) => setNewQuote(e.target.value)}
                placeholder="Enter your inspirational quote..." 
                className="resize-none"
                data-testid="textarea-quote"
              />
              <Input 
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Author (optional)" 
                data-testid="input-author"
              />
              <Button 
                onClick={handleSubmitQuote}
                disabled={submitQuoteMutation.isPending}
                className="w-full"
                data-testid="button-submit-quote"
              >
                {submitQuoteMutation.isPending ? 'Submitting...' : 'Share Quote'}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Quotes will be reviewed before being added to the collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
