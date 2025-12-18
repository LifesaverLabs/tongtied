import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { 
  Link as LinkIcon, 
  TrendingUp, 
  Users,
  Briefcase,
  ArrowRight,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const entanglements = [
  {
    title: "Donor Obligations",
    description: "When large donors contribute, there's an implicit expectation of access and consideration. Even without explicit quid pro quo, legislators feel obligated to their financial supporters.",
    stat: "73%",
    statLabel: "of Congress members report feeling obligated to donors"
  },
  {
    title: "Fundraising Time Burden",
    description: "Members of Congress spend 30-70% of their time fundraising. This creates constant interaction with donors and their priorities.",
    stat: "4+ hrs",
    statLabel: "daily fundraising recommended by party leadership"
  },
  {
    title: "Post-Career Considerations",
    description: "Many legislators plan for lobbying careers after office. Antagonizing industries means closing lucrative future doors.",
    stat: "50%+",
    statLabel: "of former Congress members become lobbyists"
  },
  {
    title: "Staff Pipeline",
    description: "Legislative staff often move to lobbying firms. This creates pressure to maintain good industry relationships throughout the ecosystem.",
    stat: "1,400+",
    statLabel: "former staffers registered as federal lobbyists"
  }
];

const consequences = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Career Lock-In",
    description: "The longer you stay, the more dependent you become on the fundraising network you've built. Starting over means losing that network."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Peer Pressure",
    description: "Colleagues who benefit from the system pressure others to maintain it. Whistleblowers and reformers face social isolation."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Escalating Costs",
    description: "Campaign costs rise every cycle. What worked last time won't be enough next time, creating ever-deeper dependency."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Lifestyle Creep",
    description: "Washington salaries and lifestyles create financial pressures that make stepping away from politics difficult."
  }
];

export default function EntrenchmentPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gold/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
              <LinkIcon className="h-4 w-4" />
              Career Entrenchment
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gold">Golden Handcuffs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Financial ties don't just influence votes—they trap legislators in a system 
              that makes it nearly impossible to act on conscience or leave politics.
            </p>
          </div>
        </div>
      </section>

      {/* Web Visualization Concept */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                The Web of Donor Relationships
              </h2>
              <p className="text-primary-foreground/70">
                Each connection creates an obligation, and breaking any thread risks unraveling the whole network.
              </p>
            </div>

            {/* Visual representation */}
            <div className="relative py-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary-foreground/20" />
                <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-dashed border-primary-foreground/30" />
                <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-primary-foreground/40" />
              </div>

              {/* Center node */}
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold flex items-center justify-center z-10">
                  <Users className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>

              {/* Connection labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                {["Industry PACs", "Wealthy Individuals", "Party Committees", "Super PACs", "Lobbyists", "Trade Associations"].map((label, idx) => {
                  const angle = (idx * 60) * (Math.PI / 180);
                  const radius = 130;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={label}
                      className="absolute text-xs md:text-sm font-medium text-primary-foreground/80 bg-primary-foreground/10 px-2 py-1 rounded-full"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-sm text-primary-foreground/60 mt-8">
              The average Congress member maintains relationships with 100+ major donors
            </p>
          </div>
        </div>
      </section>

      {/* Entanglements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              How the Ties Bind
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Financial relationships create multiple layers of obligation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {entanglements.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">{item.stat}</div>
                    <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The Consequences of Entanglement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consequences.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <div className="text-destructive">{item.icon}</div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              See the Full Picture
            </h2>
            <p className="text-muted-foreground mb-6">
              This entrenchment combines with the "steric hindrance" effect to create 
              legislators who can't move—politically or professionally.
            </p>
            <Link to="/steric-hindrance">
              <Button className="bg-gold hover:bg-gold/90 text-accent-foreground">
                Explore Steric Hindrance Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
