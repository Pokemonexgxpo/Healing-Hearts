import { useState } from "react";

const copingStrategies = [
  'Take a walk',
  'Take 5 or more deep breaths',
  'Look around your room and count the things there',
  'Journal your feelings',
  'Hug a loved one (like mom, dad and sibling etc.)',
  'Bike outside',
  'Exercise',
  'Talk to a friend',
  'Write 5 positive things about yourself',
  'Play a board game',
  'Plan a sleepover',
  'Make a craft'
];

export default function CopingWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedStrategy(null);

    const spins = 3 + Math.random() * 3;
    const finalAngle = Math.random() * 360;
    const totalRotation = spins * 360 + finalAngle;
    
    setRotation(totalRotation);

    const segmentAngle = 360 / copingStrategies.length;
    const normalizedAngle = (360 - (finalAngle % 360)) % 360;
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
    const strategy = copingStrategies[selectedIndex];

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedStrategy(strategy);
    }, 3000);
  };

  return (
    <section id="coping-wheel" className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coping Strategy Wheel</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Feeling overwhelmed? Spin the wheel to get a random coping strategy to try right now.
        </p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <div 
              className="w-80 h-80 rounded-full border-8 border-white shadow-2xl relative overflow-hidden bg-gradient-to-br from-primary to-secondary transform transition-transform duration-[3000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
              data-testid="wheel-container"
            >
              {copingStrategies.map((strategy, index) => {
                const segmentAngle = 360 / copingStrategies.length;
                const hue = (index * 30) % 360;
                return (
                  <div
                    key={strategy}
                    className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium p-2 text-center"
                    style={{
                      transform: `rotate(${index * segmentAngle}deg)`,
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((segmentAngle * Math.PI) / 180)}% ${50 - 50 * Math.sin((segmentAngle * Math.PI) / 180)}%)`,
                      backgroundColor: `hsl(${hue}, 70%, 60%)`
                    }}
                  >
                    <span style={{ transform: `rotate(${-index * segmentAngle}deg)` }}>
                      {strategy}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-accent"></div>
            </div>
          </div>
          
          <button 
            onClick={spinWheel}
            disabled={isSpinning}
            className="bg-accent text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent/90 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            data-testid="button-spin"
          >
            {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
          </button>
          
          {selectedStrategy && (
            <div className="animate-fade-in" data-testid="wheel-result">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Coping Strategy:</h3>
                <p className="text-lg text-primary font-medium mb-4" data-testid="text-strategy">
                  {selectedStrategy}
                </p>
                <p className="text-sm text-gray-600">Give this strategy a try and see how you feel!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
