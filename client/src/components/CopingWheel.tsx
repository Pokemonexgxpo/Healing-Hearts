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
    const totalRotation = rotation + spins * 360 + finalAngle;
    
    setRotation(totalRotation);

    // Calculate which segment the pointer lands on
    const segmentAngle = 360 / copingStrategies.length;
    // Normalize to 0-360 and account for the pointer being at the top
    const normalizedAngle = (360 - (finalAngle % 360) + 90) % 360;
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle) % copingStrategies.length;
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
              className="w-80 h-80 rounded-full border-8 border-white shadow-2xl relative overflow-hidden bg-white transform transition-transform ease-out"
              style={{ 
                transform: `rotate(${rotation}deg)`,
                transitionDuration: isSpinning ? '3000ms' : '0ms'
              }}
              data-testid="wheel-container"
            >
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {copingStrategies.map((strategy, index) => {
                  const segmentAngle = 360 / copingStrategies.length;
                  const startAngle = index * segmentAngle - 90; // Start from top
                  const endAngle = (index + 1) * segmentAngle - 90;
                  
                  const hue = (index * 25) % 360;
                  const color = `hsl(${hue}, 70%, 55%)`;
                  
                  // Convert angles to radians
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  
                  // Calculate path for the segment
                  const cx = 160;
                  const cy = 160;
                  const radius = 140;
                  
                  const x1 = cx + radius * Math.cos(startRad);
                  const y1 = cy + radius * Math.sin(startRad);
                  const x2 = cx + radius * Math.cos(endRad);
                  const y2 = cy + radius * Math.sin(endRad);
                  
                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;
                  
                  const pathData = [
                    `M ${cx} ${cy}`,
                    `L ${x1} ${y1}`,
                    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                    'Z'
                  ].join(' ');
                  
                  // Text position (middle of segment)
                  const textAngle = startAngle + segmentAngle / 2;
                  const textRad = (textAngle * Math.PI) / 180;
                  const textRadius = radius * 0.65;
                  const textX = cx + textRadius * Math.cos(textRad);
                  const textY = cy + textRadius * Math.sin(textRad);
                  
                  return (
                    <g key={strategy}>
                      <path
                        d={pathData}
                        fill={color}
                        stroke="white"
                        strokeWidth="2"
                      />
                      <text
                        x={textX}
                        y={textY}
                        fill="white"
                        fontSize="10"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                      >
                        <tspan x={textX} dy="-5">{strategy.split(' ').slice(0, 2).join(' ')}</tspan>
                        {strategy.split(' ').length > 2 && (
                          <tspan x={textX} dy="12">{strategy.split(' ').slice(2).join(' ')}</tspan>
                        )}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
              <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
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
