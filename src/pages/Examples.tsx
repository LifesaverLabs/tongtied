import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Receipt, 
  Cigarette, 
  Fuel,
  TrendingDown,
  Users,
  DollarSign,
  Clock
} from "lucide-react";

interface ExampleData {
  industry: string;
  icon: React.ReactNode;
  contributions: string;
  harm: string;
  delayedReforms: string[];
  keyStats: { label: string; value: string }[];
  sources: string[];
}

const examples: ExampleData[] = [
  {
    industry: "NFL & Youth Sports",
    icon: <Brain className="h-8 w-8" />,
    contributions: "$5.5M+ in lobbying (2020-2023)",
    harm: "Chronic traumatic encephalopathy (CTE) affecting thousands of former players; youth brain injuries",
    delayedReforms: [
      "Mandatory concussion protocols delayed by decades",
      "Youth tackle football age restrictions blocked",
      "CTE research funding limited",
      "Settlement caps protecting league finances"
    ],
    keyStats: [
      { label: "Youth concussions/year", value: "300K+" },
      { label: "Years NFL denied CTE link", value: "20+" },
      { label: "Settlement fund", value: "$1B" }
    ],
    sources: ["opensecrets.org/industries/indus.php?ind=N07"]
  },
  {
    industry: "Tax Preparation Industry",
    icon: <Receipt className="h-8 w-8" />,
    contributions: "$28M+ lobbying since 2006",
    harm: "Americans spend 6+ billion hours and $30+ billion annually on tax prep that could be pre-filled",
    delayedReforms: [
      "IRS Free File program gutted",
      "Pre-filled returns blocked since 2000s",
      "Return-free filing killed repeatedly",
      "SimpleTax and ReadyReturn proposals defeated"
    ],
    keyStats: [
      { label: "Hours wasted annually", value: "6B+" },
      { label: "Cost to Americans", value: "$30B+" },
      { label: "Countries with pre-filled returns", value: "36" }
    ],
    sources: ["propublica.org/article/filing-taxes-could-be-free-simple"]
  },
  {
    industry: "Tobacco Industry",
    icon: <Cigarette className="h-8 w-8" />,
    contributions: "$480K avg per election cycle to Congress",
    harm: "480,000 deaths per year; 10 years of life lost on average per smoker",
    delayedReforms: [
      "Surgeon General warning delayed 2+ years",
      "TV advertising ban took decades",
      "FDA regulation blocked until 2009",
      "Menthol ban still pending after 10+ years"
    ],
    keyStats: [
      { label: "Annual US deaths", value: "480K" },
      { label: "Years of life lost/smoker", value: "10" },
      { label: "Years to FDA regulation", value: "45" }
    ],
    sources: ["opensecrets.org/industries/indus.php?ind=A02"]
  },
  {
    industry: "Oil & Gas Industry",
    icon: <Fuel className="h-8 w-8" />,
    contributions: "$2.6B+ in lobbying (2020-2023)",
    harm: "Climate change acceleration; public health impacts from pollution",
    delayedReforms: [
      "Climate legislation delayed 30+ years",
      "Fossil fuel subsidies maintained ($20B/year)",
      "EPA regulations weakened repeatedly",
      "Paris Agreement withdrawal (temporary)"
    ],
    keyStats: [
      { label: "Annual fossil fuel subsidies", value: "$20B" },
      { label: "Years of climate denial funding", value: "40+" },
      { label: "Lobbying spend (2020s)", value: "$2.6B+" }
    ],
    sources: ["opensecrets.org/industries/indus.php?ind=E01"]
  }
];

export default function ExamplesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-destructive/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4" />
              Real Examples of Influence
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Money Talks,{" "}
              <span className="text-destructive">Legislators Can't</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              These four industries demonstrate how campaign contributions and lobbying 
              systematically delay or block reforms that would save lives and protect citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {examples.map((example, index) => (
              <Card key={example.industry} className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left column - Industry header */}
                  <div className="bg-primary p-8 text-primary-foreground">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary-foreground/10 rounded-lg">
                        {example.icon}
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold">
                          {example.industry}
                        </h2>
                        <p className="text-primary-foreground/70 text-sm mt-1">
                          {example.contributions}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-gold text-sm font-medium mb-2">
                          <TrendingDown className="h-4 w-4" />
                          Documented Harm
                        </div>
                        <p className="text-sm text-primary-foreground/80">
                          {example.harm}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-primary-foreground/10">
                        {example.keyStats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-gold font-bold text-lg">{stat.value}</div>
                            <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column - Delayed reforms */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-6">
                      <Clock className="h-4 w-4" />
                      Reforms Delayed or Blocked
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {example.delayedReforms.map((reform, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg"
                        >
                          <div className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-sm text-foreground">{reform}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Sources: {example.sources.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Pattern Is Clear
            </h2>
            <p className="text-muted-foreground mb-6">
              In each case, well-documented public harm continues for decades while 
              industries with deep pockets maintain the status quo. Campaign contributions 
              don't buy votes directly—they buy <strong>silence</strong>, 
              <strong> delay</strong>, and <strong>inaction</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              This is why Lawrence Lessig argues campaign finance reform must come first—
              until we fix the money problem, we can't fix anything else.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
