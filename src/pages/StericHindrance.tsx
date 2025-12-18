import { useState, useRef, useEffect, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Atom, 
  DollarSign, 
  RotateCcw,
  Info,
  Play,
  Pause
} from "lucide-react";

interface Contribution {
  id: string;
  label: string;
  amount: string;
  angle: number;
  distance: number;
}

const contributionTypes = [
  { label: "Oil & Gas PAC", amount: "$50K" },
  { label: "Pharma Lobby", amount: "$75K" },
  { label: "Tech Industry", amount: "$100K" },
  { label: "Wall Street", amount: "$125K" },
  { label: "Defense Contractor", amount: "$60K" },
  { label: "Insurance PAC", amount: "$45K" },
];

export default function StericHindrancePage() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(2);
  const [currentRotation, setCurrentRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Calculate mobility based on contributions
  const mobility = Math.max(0, 100 - contributions.length * 15);
  const effectiveSpeed = rotationSpeed * (mobility / 100);

  // Animation loop
  const animate = useCallback(() => {
    if (isAnimating) {
      setCurrentRotation(prev => (prev + effectiveSpeed) % 360);
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isAnimating, effectiveSpeed]);

  useEffect(() => {
    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating, animate]);

  const addContribution = () => {
    if (contributions.length >= 6) return;
    
    const type = contributionTypes[contributions.length];
    const newContribution: Contribution = {
      id: `contrib-${Date.now()}`,
      label: type.label,
      amount: type.amount,
      angle: contributions.length * 60,
      distance: 80 + Math.random() * 20,
    };
    
    setContributions(prev => [...prev, newContribution]);
  };

  const reset = () => {
    setContributions([]);
    setIsAnimating(false);
    setCurrentRotation(0);
  };

  const getMobilityColor = () => {
    if (mobility > 70) return "text-success";
    if (mobility > 40) return "text-warning";
    return "text-destructive";
  };

  const getMobilityLabel = () => {
    if (mobility > 70) return "High Mobility";
    if (mobility > 40) return "Restricted";
    return "Severely Hindered";
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Atom className="h-4 w-4" />
              Interactive Visualization
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gold">Steric Hindrance</span> in Politics
            </h1>
            <p className="text-lg text-muted-foreground">
              In chemistry, steric hindrance occurs when large groups attached to a molecule 
              restrict its movement. Campaign contributions work the same way.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Visualization */}
              <div className="lg:col-span-2">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
                  <div 
                    ref={containerRef}
                    className="relative w-full aspect-square max-w-md mx-auto"
                  >
                    {/* Orbital rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="absolute w-full h-full rounded-full border-2 border-dashed opacity-20"
                        style={{ 
                          borderColor: mobility > 70 ? 'hsl(var(--success))' : 
                                       mobility > 40 ? 'hsl(var(--warning))' : 
                                       'hsl(var(--destructive))'
                        }}
                      />
                      <div 
                        className="absolute w-3/4 h-3/4 rounded-full border-2 border-dashed opacity-30"
                        style={{ 
                          borderColor: mobility > 70 ? 'hsl(var(--success))' : 
                                       mobility > 40 ? 'hsl(var(--warning))' : 
                                       'hsl(var(--destructive))'
                        }}
                      />
                    </div>

                    {/* Center molecule (legislator) */}
                    <div 
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                      style={{ transform: `translate(-50%, -50%) rotate(${currentRotation}deg)` }}
                    >
                      <div className={`w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-300 ${contributions.length > 4 ? 'animate-wiggle' : ''}`}>
                        <div className="text-center text-primary-foreground">
                          <div className="text-xs uppercase tracking-wider opacity-70">Legislator</div>
                          <div className={`text-lg font-bold ${getMobilityColor()}`}>
                            {mobility}%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contribution nodes */}
                    {contributions.map((contrib, idx) => {
                      const angle = (contrib.angle + currentRotation) * (Math.PI / 180);
                      const x = Math.cos(angle) * contrib.distance;
                      const y = Math.sin(angle) * contrib.distance;
                      
                      return (
                        <div
                          key={contrib.id}
                          className="absolute left-1/2 top-1/2 transition-all duration-300"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          {/* Connection line */}
                          <div 
                            className="absolute left-1/2 top-1/2 h-0.5 bg-gold/50 origin-left"
                            style={{
                              width: `${contrib.distance - 30}px`,
                              transform: `translate(-${contrib.distance - 30}px, -1px) rotate(${180 + contrib.angle}deg)`,
                            }}
                          />
                          
                          {/* Node */}
                          <div className="relative group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold animate-scale-in">
                              <DollarSign className="h-6 w-6 text-accent-foreground" />
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              <div className="font-medium">{contrib.label}</div>
                              <div className="text-gold">{contrib.amount}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Empty slots hint */}
                    {contributions.length < 6 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        Click "Add Contribution" to attach donors
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Controls */}
              <div className="space-y-6">
                {/* Mobility indicator */}
                <Card className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Legislative Mobility
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-bold ${getMobilityColor()}`}>
                        {mobility}%
                      </span>
                      <span className={`text-sm font-medium ${getMobilityColor()}`}>
                        {getMobilityLabel()}
                      </span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          mobility > 70 ? 'bg-success' : 
                          mobility > 40 ? 'bg-warning' : 
                          'bg-destructive'
                        }`}
                        style={{ width: `${mobility}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {contributions.length === 0 
                        ? "Add contributions to see how they restrict movement"
                        : `${contributions.length} donor${contributions.length > 1 ? 's' : ''} attached`
                      }
                    </p>
                  </div>
                </Card>

                {/* Animation controls */}
                <Card className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Controls
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={addContribution}
                        disabled={contributions.length >= 6}
                        className="bg-gold hover:bg-gold/90 text-accent-foreground"
                      >
                        <DollarSign className="h-4 w-4 mr-1" />
                        Add Contribution
                      </Button>
                      <Button variant="outline" onClick={reset}>
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Reset
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Rotation Speed</span>
                        <span className="font-medium">{rotationSpeed}x</span>
                      </div>
                      <Slider
                        value={[rotationSpeed]}
                        onValueChange={([value]) => setRotationSpeed(value)}
                        min={1}
                        max={5}
                        step={1}
                      />
                    </div>

                    <Button
                      className="w-full"
                      variant={isAnimating ? "secondary" : "default"}
                      onClick={() => setIsAnimating(!isAnimating)}
                    >
                      {isAnimating ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Animate
                        </>
                      )}
                    </Button>
                  </div>
                </Card>

                {/* Info */}
                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        <strong>The Analogy:</strong> Just as bulky chemical groups 
                        slow molecular reactions, campaign contributions create "friction" 
                        that slows legislative action.
                      </p>
                      <p>
                        More donors = more obligations = less freedom to act on conscience.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Understanding the Chemistry Analogy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  In Chemistry
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Atom className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Large substituent groups attached to a molecule create steric bulk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Atom className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>This bulk physically blocks other molecules from approaching reaction sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Atom className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>The result: slower reactions and restricted molecular movement</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  In Politics
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Campaign contributions create implicit obligations to donors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>These obligations block legislators from considering reforms that might harm donors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>The result: legislative paralysis and restricted political movement</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
