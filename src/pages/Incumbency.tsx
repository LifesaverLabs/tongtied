import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { 
  Crown, 
  TrendingUp, 
  DollarSign,
  Users,
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const incumbentStats = [
  { label: "House incumbent reelection rate (2022)", value: "95%", color: "bg-destructive" },
  { label: "Senate incumbent reelection rate (2022)", value: "100%", color: "bg-destructive" },
  { label: "Average incumbent funding advantage", value: "5:1", color: "bg-gold" },
  { label: "Incumbents outraising challengers", value: "84%", color: "bg-gold" },
];

const fundingComparison = [
  { year: "2020", incumbent: 2.4, challenger: 0.4 },
  { year: "2018", incumbent: 2.1, challenger: 0.5 },
  { year: "2016", incumbent: 1.8, challenger: 0.4 },
  { year: "2014", incumbent: 1.6, challenger: 0.3 },
  { year: "2012", incumbent: 1.5, challenger: 0.3 },
];

const barriers = [
  {
    title: "Name Recognition",
    description: "Years of media coverage and constituent services create automatic awareness.",
    impact: "Challengers need $500K+ just to become known"
  },
  {
    title: "Donor Networks",
    description: "Established relationships with PACs, lobbyists, and wealthy individuals.",
    impact: "Takes 2-3 cycles to build comparable networks"
  },
  {
    title: "Committee Power",
    description: "Seniority grants committee positions that attract industry donations.",
    impact: "Committee chairs raise 40% more than average"
  },
  {
    title: "Party Support",
    description: "Parties protect incumbents with resources and strategic endorsements.",
    impact: "DCCC/NRCC rarely back primary challengers"
  },
  {
    title: "Franking Privilege",
    description: "Free mailings to constituents create continuous campaign-style communication.",
    impact: "Worth $500K-1M in equivalent advertising"
  },
  {
    title: "War Chests",
    description: "Accumulated campaign funds deter potential challengers before they start.",
    impact: "$2M+ war chests scare off 60% of challengers"
  }
];

export default function IncumbencyPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              Incumbency Reinforcement
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The{" "}
              <span className="text-gold">Incumbent Advantage</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Money creates self-perpetuating incumbencies that challengers 
              can rarely overcome, regardless of policy positions or voter preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {incumbentStats.map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className={`inline-block px-4 py-2 ${stat.color} rounded-lg mb-2`}>
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Gap Visualization */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                The Funding Gap Over Time
              </h2>
              <p className="text-muted-foreground">
                Average campaign spending (millions) - House races
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                {fundingComparison.map((year) => (
                  <div key={year.year} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium w-16">{year.year}</span>
                      <div className="flex-1 mx-4">
                        <div className="flex gap-2 items-center">
                          <div 
                            className="h-8 bg-primary rounded-r-lg flex items-center justify-end pr-2"
                            style={{ width: `${(year.incumbent / 3) * 100}%` }}
                          >
                            <span className="text-xs text-primary-foreground font-medium">
                              ${year.incumbent}M
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center mt-1">
                          <div 
                            className="h-8 bg-muted rounded-r-lg flex items-center justify-end pr-2"
                            style={{ width: `${(year.challenger / 3) * 100}%` }}
                          >
                            <span className="text-xs text-muted-foreground font-medium">
                              ${year.challenger}M
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded" />
                  <span className="text-sm text-muted-foreground">Incumbent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-muted rounded" />
                  <span className="text-sm text-muted-foreground">Challenger</span>
                </div>
              </div>
            </Card>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Data from OpenSecrets.org
            </p>
          </div>
        </div>
      </section>

      {/* Barriers */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Barriers Challengers Face
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Money creates multiple compounding advantages for incumbents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barriers.map((barrier) => (
              <Card key={barrier.title} className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {barrier.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {barrier.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-gold" />
                  <span className="text-gold font-medium">{barrier.impact}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vicious Cycle */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                The Self-Reinforcing Cycle
              </h2>
            </div>

            <div className="relative">
              {/* Cycle visualization */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Crown className="h-6 w-6" />, label: "Win Election", sublabel: "Become incumbent" },
                  { icon: <DollarSign className="h-6 w-6" />, label: "Attract Donors", sublabel: "Money flows to power" },
                  { icon: <BarChart3 className="h-6 w-6" />, label: "Build War Chest", sublabel: "Deter challengers" },
                  { icon: <Users className="h-6 w-6" />, label: "Stay in Power", sublabel: "Repeat cycle" },
                ].map((step, idx) => (
                  <div key={step.label} className="relative">
                    <Card className="p-4 text-center h-full">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                        {step.icon}
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{step.label}</h4>
                      <p className="text-xs text-muted-foreground">{step.sublabel}</p>
                    </Card>
                    {idx < 3 && (
                      <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-4 w-4 text-gold" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Return arrow on desktop */}
              <div className="hidden md:block mt-6">
                <div className="flex items-center justify-center">
                  <div className="border-2 border-dashed border-gold/30 rounded-full w-full h-8 relative">
                    <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2">
                      <ArrowRight className="h-4 w-4 text-gold rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Breaking the Cycle Requires Systemic Change
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Individual candidates can't overcome these structural advantages. 
              Only fundamental campaign finance reform can level the playing field.
            </p>
            <Link to="/lessig">
              <Button className="bg-gold hover:bg-gold/90 text-accent-foreground">
                Learn About Lessig's Solution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
