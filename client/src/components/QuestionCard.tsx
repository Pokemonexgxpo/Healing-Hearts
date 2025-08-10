import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Question {
  id: string;
  question: string;
  answer: string;
  tips: string[];
  resource: string;
  gradient: string;
  border: string;
  color: string;
  crisis?: boolean;
}

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`question-card bg-gradient-to-br ${question.gradient} rounded-2xl p-6 cursor-pointer hover:shadow-lg transition duration-300 border ${question.border}`}
      onClick={() => setIsOpen(!isOpen)}
      data-testid={`card-question-${question.id}`}
    >
      <div className="question-header">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.question}</h3>
        <div className={`flex items-center ${question.color}`}>
          <span className="text-sm font-medium">Click to learn more</span>
          <ChevronDown 
            className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>
      
      {isOpen && (
        <div className={`question-answer mt-4 pt-4 border-t ${question.border.replace('border-', 'border-t-')}`}>
          <p className="text-gray-700 mb-4">{question.answer}</p>
          <ul className="space-y-2 text-gray-700">
            {question.tips.map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
          <div className={`mt-4 p-3 ${question.crisis ? 'bg-red-100' : question.gradient.includes('blue') ? 'bg-blue-100' : question.gradient.includes('green') ? 'bg-green-100' : question.gradient.includes('purple') ? 'bg-purple-100' : question.gradient.includes('rose') ? 'bg-rose-100' : question.gradient.includes('yellow') ? 'bg-yellow-100' : question.gradient.includes('indigo') ? 'bg-indigo-100' : question.gradient.includes('teal') ? 'bg-teal-100' : question.gradient.includes('orange') ? 'bg-orange-100' : question.gradient.includes('emerald') ? 'bg-emerald-100' : 'bg-pink-100'} rounded-lg`}>
            <p className={`text-sm ${question.crisis ? 'text-red-800' : question.color.replace('text-', 'text-').replace('-600', '-800')}`}>
              {question.crisis && <strong>Crisis Support: </strong>}
              {question.resource}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
