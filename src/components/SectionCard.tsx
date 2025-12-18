import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  stat?: string;
  statLabel?: string;
  delay?: number;
}

export function SectionCard({
  title,
  description,
  href,
  icon: Icon,
  stat,
  statLabel,
  delay = 0,
}: SectionCardProps) {
  return (
    <Link
      to={href}
      className="group block p-6 bg-card rounded-xl border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-gold/20 transition-colors">
          <Icon className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {stat && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-gold">{stat}</span>
              {statLabel && (
                <span className="text-xs text-muted-foreground">{statLabel}</span>
              )}
            </div>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-gold transition-colors">
            Learn more
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
