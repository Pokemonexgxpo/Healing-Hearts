import Navigation from "@/components/Navigation";
import QuestionCard from "@/components/QuestionCard";
import CopingWheel from "@/components/CopingWheel";
import QuotesSection from "@/components/QuotesSection";
import ChatRoom from "@/components/ChatRoom";
import CrisisResources from "@/components/CrisisResources";

const questions = [
  {
    id: "stress",
    question: "I'm stressed, what do I do?",
    answer: "Here are some immediate strategies to help manage stress:",
    tips: [
      "Take deep, slow breaths for 2-3 minutes",
      "Go for a walk outside to clear your mind",
      "Use a fidget toy or stress ball",
      "Try progressive muscle relaxation"
    ],
    resource: "YouTube: Search \"DIY stress relief crafts\" or \"homemade squishy tutorials\"",
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    color: "text-primary"
  },
  {
    id: "burden",
    question: "I feel like I'm a burden on my friends and family. Am I?",
    answer: "I'm sorry you're feeling this way, but you're really not a burden. Here's why:",
    tips: [
      "Every human has inherent worth and value",
      "Your feelings are valid, and many people experience this",
      "Consider talking to your family about how you feel",
      "Your presence matters more than you realize"
    ],
    resource: "Consider joining our chat room to connect with others who understand, or reach out if you need someone to talk to.",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
    color: "text-secondary"
  },
  {
    id: "therapy",
    question: "If I go to therapy, is something wrong with me?",
    answer: "Absolutely not! Going to therapy is a sign of strength, not weakness.",
    tips: [
      "Therapy is a normal, healthy practice",
      "It helps you process emotions and develop coping skills",
      "Many successful people use therapy regularly",
      "If one therapist doesn't fit, try another"
    ],
    resource: "Anyone who says therapy is \"wrong\" is misinformed. Consider journaling if therapy isn't accessible right now.",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    color: "text-purple-600"
  },
  {
    id: "selfharm",
    question: "If I have self-harm thoughts, does that make me a bad person?",
    answer: "No, not at all. Having these thoughts doesn't make you bad - it means you're struggling and need support.",
    tips: [
      "These thoughts are symptoms, not character flaws",
      "Try taking deep breaths and grounding exercises",
      "Redirect energy: take a walk, bike, or do chores",
      "Reach out to someone you trust"
    ],
    resource: "Crisis Support: Call 988 (Suicide Crisis Lifeline) if thoughts become overwhelming. Email: Reachanya@09.gmail.com",
    gradient: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    color: "text-rose-600",
    crisis: true
  },
  {
    id: "help",
    question: "How do I know if I need to talk to someone?",
    answer: "You should reach out if:",
    tips: [
      "Your thoughts interfere with work or daily activities",
      "You're having trouble finding happiness or joy",
      "You have strong urges to self-harm",
      "You feel overwhelmed more often than not"
    ],
    resource: "Resources: Talk to a friend, parent, or call 988. Email: Reachanya@09.gmail.com",
    gradient: "from-yellow-50 to-amber-50",
    border: "border-yellow-100",
    color: "text-amber-600"
  },
  {
    id: "lgbtq",
    question: "I'm gay/bisexual/trans, am I less of a person? What if my family doesn't support me?",
    answer: "You are absolutely NOT less of a person. Your identity is valid and you deserve love and respect.",
    tips: [
      "Your worth isn't determined by others' acceptance",
      "Many people share your experience - you're not alone",
      "Consider having honest conversations with family",
      "Find supportive communities online and in person"
    ],
    resource: "Family may need time to understand. Focus on building a support network of people who accept you completely.",
    gradient: "from-indigo-50 to-blue-50",
    border: "border-indigo-100",
    color: "text-indigo-600"
  },
  {
    id: "neurodivergent-love",
    question: "Does being neurodivergent make me incapable of finding love?",
    answer: "Absolutely not! Being neurodivergent doesn't limit your capacity for love in any way.",
    tips: [
      "Many neurodivergent people have loving relationships",
      "Your unique perspective is valuable and attractive",
      "The right person will appreciate all of you",
      "Focus on self-acceptance and authentic connections"
    ],
    resource: "Your brain works in fascinating and unique ways - that's something to celebrate, not hide.",
    gradient: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
    color: "text-teal-600"
  },
  {
    id: "finding-love",
    question: "What if I never find anyone to love?",
    answer: "Love comes in many forms and often when we least expect it:",
    tips: [
      "The right person often appears at the right time",
      "Use this time to focus on your goals and interests",
      "Being single doesn't mean being unhappy",
      "Love yourself first - it attracts healthy relationships",
      "Find love in friendships, family, and passions"
    ],
    resource: "Don't force or pressure yourself. Many happy, successful people are single by choice or circumstance.",
    gradient: "from-orange-50 to-red-50",
    border: "border-orange-100",
    color: "text-orange-600"
  },
  {
    id: "neurodivergent-meaning",
    question: "What does being neurodivergent mean?",
    answer: "Neurodivergent means having a brain that works in fascinating and unique ways:",
    tips: [
      "It includes conditions like ADHD, autism, dyslexia, and more",
      "It's not \"wrong\" or \"broken\" - just different",
      "Often comes with unique strengths and perspectives",
      "Everyone's brain is unique in some way"
    ],
    resource: "The secret is: everyone in this world is a little neurodivergent in their own way. Your brain is perfectly yours.",
    gradient: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
    color: "text-emerald-600"
  },
  {
    id: "body-confidence",
    question: "I feel unconfident about my body. I'm too fat/skinny?",
    answer: "Your body is unique and beautiful just as it is:",
    tips: [
      "Everyone's body is different - that's what makes us human",
      "Social media often shows unrealistic standards",
      "You don't need to compare yourself to others",
      "Focus on how your body feels, not just how it looks",
      "Practice self-compassion and positive self-talk"
    ],
    resource: "Everyone is beautiful in their own way. Your worth isn't determined by your appearance.",
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    color: "text-pink-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-hearts-pattern font-inter text-gray-800 relative">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(10)].map((_, i) => (
          <svg 
            key={i}
            className="floating-heart w-8 h-8 text-pink-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ))}
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100/60 via-purple-50/40 to-blue-100/60 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-healing-gradient"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You're Not Alone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A safe space for mental health support, coping strategies, and community connection. 
              Get the help and encouragement you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#questions" 
                className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition duration-200 shadow-lg"
                data-testid="link-support"
              >
                Get Support Now
              </a>
              <a 
                href="#resources" 
                className="bg-red-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-600 transition duration-200 shadow-lg"
                data-testid="link-crisis"
              >
                Crisis Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions & Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Click on any question to get supportive advice and resources</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map(question => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>
      </section>

      <CopingWheel />
      <QuotesSection />
      <ChatRoom />
      <CrisisResources />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-xl font-semibold">Healing Hearts</span>
              </div>
              <p className="text-gray-300 mb-4">A safe space for mental health support and community connection.</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Contact:</span> 
                  <a href="mailto:Reachanya@09.gmail.com" className="text-blue-400 hover:text-blue-300" data-testid="link-email">
                    Reachanya@09.gmail.com
                  </a>
                </p>
                <p className="text-xs text-gray-400">
                  I'll try to respond to all emails, but please be patient as I may be busy with school.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Access</h4>
              <ul className="space-y-2">
                <li><a href="#questions" className="text-gray-300 hover:text-white transition duration-200" data-testid="link-questions">Support Questions</a></li>
                <li><a href="#coping-wheel" className="text-gray-300 hover:text-white transition duration-200" data-testid="link-wheel">Coping Strategies</a></li>
                <li><a href="#quotes" className="text-gray-300 hover:text-white transition duration-200" data-testid="link-quotes">Inspirational Quotes</a></li>
                <li><a href="#chat" className="text-gray-300 hover:text-white transition duration-200" data-testid="link-chat">Community Chat</a></li>
                <li><a href="#resources" className="text-red-400 hover:text-red-300 transition duration-200" data-testid="link-resources">Crisis Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Important Notice</h4>
              <div className="bg-yellow-900/20 border border-yellow-600/20 rounded-lg p-4">
                <p className="text-sm text-yellow-200 mb-2">
                  <strong>This is NOT a substitute for professional help.</strong>
                </p>
                <p className="text-xs text-gray-300">
                  This website is a supportive tool created to help people feel less alone. 
                  If you are seriously suffering, please seek professional medical or mental health care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              Created with ❤️ by JB Poetry • 
              <span className="text-xs">Remember: You matter, you're valued, and you're not alone</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
