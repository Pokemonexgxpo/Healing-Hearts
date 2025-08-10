import { AlertTriangle, Globe, Phone, MessageSquare } from "lucide-react";

export default function CrisisResources() {
  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crisis Resources & Help Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you're in crisis or need immediate help, these resources are available 24/7
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Crisis Hotlines</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Suicide Crisis Lifeline</h4>
                <p className="text-2xl font-bold text-red-600 mb-2" data-testid="text-crisis-988">988</p>
                <p className="text-gray-600 text-sm">Available 24/7 for anyone in crisis or emotional distress</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Eating Disorder Helpline</h4>
                <p className="text-xl font-bold text-orange-600 mb-2" data-testid="text-eating-disorder">866-662-1235</p>
                <p className="text-gray-600 text-sm">Support for eating disorders and body image issues</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Crisis Text Line</h4>
                <p className="text-xl font-bold text-purple-600 mb-2" data-testid="text-crisis-text">Text HOME to 741741</p>
                <p className="text-gray-600 text-sm">Free, confidential crisis support via text message</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Online Support</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">National Suicide Prevention</h4>
                <a 
                  href="https://suicidepreventionlifeline.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 text-sm"
                  data-testid="link-suicide-prevention"
                >
                  suicidepreventionlifeline.org
                </a>
                <p className="text-gray-600 text-sm mt-1">Resources, chat support, and information</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Mental Health America</h4>
                <a 
                  href="https://mhanational.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-600 hover:text-green-800 text-sm"
                  data-testid="link-mental-health-america"
                >
                  mhanational.org
                </a>
                <p className="text-gray-600 text-sm mt-1">Mental health screening and resources</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">LGBTQ+ Support</h4>
                <a 
                  href="https://www.thetrevorproject.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-600 hover:text-purple-800 text-sm"
                  data-testid="link-trevor-project"
                >
                  thetrevorproject.org
                </a>
                <p className="text-gray-600 text-sm mt-1">Crisis support for LGBTQ+ youth</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-red-100 border border-red-300 rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
            <h4 className="font-bold text-red-800">If this is a medical emergency</h4>
          </div>
          <p className="text-red-700 font-medium">Call 911 immediately or go to your nearest emergency room</p>
        </div>
      </div>
    </section>
  );
}
