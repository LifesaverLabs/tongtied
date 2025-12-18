import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { SectionCard } from "@/components/SectionCard";
import { 
  DollarSign, 
  Briefcase, 
  Atom, 
  Link as LinkIcon, 
  Crown,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const stats = [
  { value: "14.4", prefix: "$", suffix: "B", label: "Spent on 2020 federal elections" },
  { value: "91", suffix: "%", label: "House incumbents re-elected" },
  { value: "480000", prefix: "$", label: "Avg. tobacco industry contributions/cycle" },
  { value: "70", suffix: "+", label: "Years of delayed reform" },
];

const sections = [
  {
    title: "Money Talks, Legislators Can't",
    description: "Real examples of how NFL, tax prep, tobacco, and oil & gas contributions block common-sense reforms.",
    href: "/examples",
    icon: DollarSign,
    stat: "$2.6B",
    statLabel: "Oil & gas lobbying (2020s)",
  },
  {
    title: "Breaking the Cycle",
    description: "Lawrence Lessig's referendum presidency concept and why campaign finance reform must come first.",
    href: "/lessig",
    icon: Briefcase,
    stat: "1st",
    statLabel: "Priority reform needed",
  },
  {
    title: "Steric Hindrance",
    description: "Interactive visualization showing how money creates legislative 'molecular friction.'",
    href: "/steric-hindrance",
    icon: Atom,
    stat: "↓40%",
    statLabel: "Legislative mobility with donors",
  },
  {
    title: "Golden Handcuffs",
    description: "How financial ties make it harder for officials to act on conscience or change careers.",
    href: "/entrenchment",
    icon: LinkIcon,
    stat: "83%",
    statLabel: "Stay due to donor relationships",
  },
  {
    title: "The Incumbent Advantage",
    description: "Data on how money creates long-lasting incumbencies that challengers can't overcome.",
    href: "/incumbency",
    icon: Crown,
    stat: "5:1",
    statLabel: "Incumbent funding advantage",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="relative">
                <DollarSign className="h-20 w-20 text-gold animate-float" />
                <div className="absolute inset-0 bg-gold/30 blur-2xl rounded-full" />
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              When Money Speaks,{" "}
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <span className="relative inline-block cursor-help group">
                      <span className="text-gradient-gold opacity-100 group-hover:opacity-70 transition-opacity duration-300">
                        Legislators
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-gold/80 via-gold/60 to-gold/80 blur-sm group-hover:opacity-30 opacity-60 transition-opacity duration-300 pointer-events-none" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-foreground text-background px-4 py-2 max-w-xs text-center">
                    <p className="font-medium">Money silences, hinders, and tongties legislators</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              <span className="text-destructive">Can't</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Campaign contributions don't just influence votes—they <strong>tie tongues</strong>, 
              making it nearly impossible for legislators to act on conscience-driven reforms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Link to="/steric-hindrance">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-accent-foreground font-semibold shadow-gold">
                  See the Interactive Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/examples">
                <Button size="lg" variant="outline" className="border-primary">
                  Explore the Evidence
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Data sourced from OpenSecrets.org and FEC.gov
          </p>
        </div>
      </section>

      {/* Section Previews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding the Problem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deep into how campaign finance creates systemic barriers to reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <SectionCard
                key={section.href}
                {...section}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* External Resources CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Do Your Own Research
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              We encourage you to explore campaign finance data directly. 
              These trusted sources provide comprehensive, up-to-date information.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.opensecrets.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                OpenSecrets
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.followthemoney.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                FollowTheMoney
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.fec.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                FEC.gov
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Internationalization Sub-section */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                🌍 Internationalization
              </h3>
              <div className="text-primary-foreground/80 space-y-4 text-left">
                <p>
                  This isn't just an American problem. Campaign finance silences, hinders, and tongties legislators 
                  in democracies worldwide—from local councils to national parliaments.
                </p>
                <p>
                  We're happy to focus United States efforts on{" "}
                  <strong className="text-gold">tongtied.us</strong> and{" "}
                  <strong className="text-gold">tungtied.us</strong>, dedicating{" "}
                  <strong className="text-gold">tongtied.org</strong> as an umbrella 
                  for a wider community of Tongtied activism dedicated to defeating kleptocracies elsewhere.
                </p>
                <p>
                  Each state and country deserves its own movement on this, led by natives and locals who understand 
                  how money tongties and tungties their own <em>calmunity</em><sup>⁵</sup> (community). 
                  If you're passionate about campaign finance reform in your region, we want to support your voice.
                </p>
                <p className="text-sm text-primary-foreground/60 italic">
                  ⁵ "Calmunity" — a calm community, one not agitated by the corrupting influence of money in politics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
