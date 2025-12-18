import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  ExternalLink,
  Lightbulb,
  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LessigPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Lawrence Lessig's Vision
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The{" "}
              <span className="text-gold">Referendum Presidency</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A radical proposal: elect a president on a single issue—campaign finance reform—
              then step aside once the reform is passed.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Quote className="h-10 w-10 text-gold mb-4" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-6">
              "We have a Congress that is pathologically dependent on campaign funding. 
              Until we fix that, we won't fix anything else."
            </blockquote>
            <cite className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center font-display font-bold text-xl">
                LL
              </div>
              <div>
                <div className="font-semibold">Lawrence Lessig</div>
                <div className="text-sm text-primary-foreground/70">Harvard Law Professor, 2016 Presidential Candidate</div>
              </div>
            </cite>
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Why Reform Must Come First
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Lessig's central argument is simple but profound: <strong>campaign finance 
                  corruption isn't just another issue</strong>—it's the issue that prevents 
                  us from solving all other issues.
                </p>
                <p>
                  Climate change, healthcare, tax reform, criminal justice—every major 
                  policy area is blocked by the same fundamental problem: legislators 
                  who are financially dependent on industries that benefit from inaction.
                </p>
                <p>
                  This creates what Lessig calls <strong>"the gift economy"</strong>—a system 
                  where campaign contributions create implicit obligations that tie legislators' 
                  hands, even without explicit quid pro quo.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-secondary/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-gold" />
                The Referendum Presidency Concept
              </h3>
              <div className="space-y-4">
                {[
                  "Run on a single mandate: passing fundamental campaign finance reform",
                  "Build coalition around this single issue across party lines",
                  "Win election as a referendum on corruption, not partisan politics",
                  "Pass the Citizen Equality Act or similar comprehensive reform",
                  "Resign after reform passes, allowing VP to take over"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold text-accent-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Reforms */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              What Reform Would Look Like
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lessig's proposed Citizen Equality Act addresses three key areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="text-primary"><Scale className="h-8 w-8" /></div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Equal Citizens
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Public funding of campaigns through citizen vouchers—giving every voter equal voice in funding elections.
              </p>
              <ul className="space-y-2">
                {["$50-100 vouchers per citizen", "Can donate to any candidate", "Reduces dependence on wealthy donors"].map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="text-primary"><CheckCircle2 className="h-8 w-8" /></div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Represented Citizens
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                End partisan gerrymandering through independent redistricting, ensuring fair representation.
              </p>
              <ul className="space-y-2">
                {["Independent commissions", "Mathematical fairness standards", "Competitive districts"].map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="text-primary"><Lightbulb className="h-8 w-8" /></div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Equal Voters
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automatic voter registration and ranked-choice voting to maximize participation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span>
                    Automatic registration at 18 or 14 under{" "}
                    <a 
                      href="https://raisingrights.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-gold underline"
                    >
                      suffrage for all who suffer and the Raising Rights arguments
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                  <span>Ranked-choice voting</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                  <span>End voter suppression</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Draft Lessig Section */}
      <section className="py-16 bg-gold/10 border-y border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-gold text-sm font-medium mb-4">
              <Scale className="h-4 w-4" />
              Constitutional Argument
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Drafting or Conscripting Lessig Involuntarily
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Given the fundamental nature of the campaign finance reform problem, there exists a compelling 
                constitutional argument for drafting or conscripting Lawrence Lessig for the Presidency—
                <strong>voluntarily or involuntarily</strong>—through draft letter, draft petition, or conscription lawsuit.
              </p>
              <p>
                The argument rests on an implied constitutional right: <strong>if the President, as Commander-in-Chief, 
                holds powers under the War Powers Act to organize citizens into a conscripted draft</strong>, then 
                correspondingly, citizens enjoy the reciprocal right to conscript qualified, promising candidates 
                for the Presidency itself. This would be a fundamental condition of Presidency-eligible U.S. citizenship.
              </p>
              <Card className="p-6 bg-secondary/50">
                <h4 className="font-display font-bold text-foreground mb-3">Lessig's Eligibility Window</h4>
                <p className="text-sm mb-3">
                  While Lawrence Lessig approaches the 68-year-old age limit under{" "}
                  <a 
                    href="https://www.law.cornell.edu/uscode/text/10/1253" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gold underline"
                  >
                    10 USC §1253
                  </a>
                  , he will be 67.7 years old in February 2029 and continues to meet all conditions 
                  for a short-term Referendum Presidency.
                </p>
                <p className="text-sm">
                  <strong>Critical deadline:</strong> Lessig could complete the Tongtied Referendum Presidency work 
                  before he turns 68 on June 3, 2029, and ages out of the mandatory retirement age for 
                  Commanders-in-Chief under 10 USC §1253.
                </p>
              </Card>
              <p className="text-sm italic">
                This unprecedented approach reflects the unprecedented nature of the problem: when the normal 
                political process is fundamentally corrupted, extraordinary constitutional remedies may be required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Learn More from Lessig Directly
            </h2>
            <p className="text-muted-foreground mb-8">
              These resources provide deeper insight into the corruption problem and proposed solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.ted.com/talks/lawrence_lessig_we_the_people_and_the_republic_we_must_reclaim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-destructive hover:bg-destructive/90">
                  Watch TED Talk
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.amazon.com/Republic-Lost-Money-Corrupts-Congress/dp/0446576441"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Read "Republic, Lost"
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
