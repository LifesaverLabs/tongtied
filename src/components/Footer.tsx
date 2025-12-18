import { Link } from "react-router-dom";
import { ExternalLink, DollarSign, Heart } from "lucide-react";

const externalLinks = [
  {
    name: "OpenSecrets",
    url: "https://www.opensecrets.org/",
    description: "Campaign finance data",
  },
  {
    name: "FollowTheMoney",
    url: "https://www.followthemoney.org/",
    description: "State-level contributions",
  },
  {
    name: "FEC.gov",
    url: "https://www.fec.gov/",
    description: "Official records",
  },
];

const siteLinks = [
  { href: "/examples", label: "Examples of Influence" },
  { href: "/lessig", label: "Lessig's Referendum" },
  { href: "/steric-hindrance", label: "Steric Hindrance" },
  { href: "/entrenchment", label: "Career Entrenchment" },
  { href: "/incumbency", label: "Incumbency Reinforcement" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Future Ownership Banner */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-center text-gold">
            <strong>Future Plans:</strong> This site aims to transfer leadership and creative control 
            to a dedicated campaign finance reform organization, ideally with Lawrence Lessig's blessing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <DollarSign className="h-6 w-6 text-gold" />
              <span className="font-display text-lg font-bold">
                Tong<span className="text-destructive">tied</span>.org
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Raising awareness about how financial contributions in politics 
              effectively "tie the tongues" of legislators.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Research Resources</h4>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-primary-foreground group-hover:text-gold transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xs text-primary-foreground/60">
                        {link.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Take Action */}
          <div>
            <h4 className="font-display font-semibold mb-4">Take Action</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Learn about the issue, share with others, and support campaign finance reform initiatives.
            </p>
            <a
              href="https://represent.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-accent-foreground text-sm font-medium rounded-md hover:bg-gold/90 transition-colors"
            >
              Get Involved
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Lifesaver Labs Footer Placeholder */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>A project by</span>
              <a 
                href="https://www.lifesaverlabs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Heart className="h-4 w-4 text-destructive" />
                <span className="font-medium">Lifesaver Labs</span>
              </a>
            </div>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Tongtied.org. Data sourced from public records.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
