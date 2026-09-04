import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Icon } from "./icons";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl sm:mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className={cn("text-h2 font-semibold", light ? "text-white" : "text-navy-900")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lead", light ? "text-navy-100" : "text-navy-600")}>{description}</p>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "tertiary" | "gold";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-navy-800 text-white hover:bg-navy-900",
  secondary: "bg-white text-navy-800 border border-navy-200 hover:border-navy-500 hover:bg-navy-50",
  tertiary: "text-navy-700 hover:text-navy-900",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-11 px-4 text-small",
  md: "h-12 px-6 text-body",
  lg: "h-14 px-8 text-lead",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  iconRight?: string;
  iconLeft?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  iconRight,
  iconLeft,
  fullWidth,
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const isTertiary = variant === "tertiary";
  const classes = cn(
    "care-button inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200",
    isTertiary
      ? "min-h-11 text-navy-700 hover:text-navy-900 underline-offset-4 hover:underline"
      : cn("rounded-md", variantClasses[variant], sizeClasses[size]),
    fullWidth && "w-full",
    className
  );

  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} className="h-5 w-5 shrink-0" />}
      {children}
      {iconRight && <Icon name={iconRight} className="h-5 w-5 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-small text-navy-500">
        <li>
          <Link to="/" className="hover:text-navy-800 hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <Icon name="chevronRight" className="h-3.5 w-3.5 text-navy-300" />
            {item.to ? (
              <Link to={item.to} className="hover:text-navy-800 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  description,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="page-header bg-navy-50/60">
      <Container className="py-12 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-semibold">{title}</h1>
          {description && <p className="mx-auto mt-4 max-w-2xl text-lead text-navy-600">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
        </div>
      </Container>
    </div>
  );
}
