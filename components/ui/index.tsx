import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------------------------- Card ---------------------------- */

const cardVariants = cva("card p-6", {
  variants: {
    variant: {
      default: "card",
      interactive: "card card-interactive cursor-pointer",
      flat: "card-flat p-6",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />;
}

/* ---------------------------- Badge ---------------------------- */

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      pine: "badge-pine",
      terracotta: "badge-terracotta",
      neutral: "badge-neutral",
      outline: "badge-outline",
    },
  },
  defaultVariants: { variant: "pine" },
});

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

/* ---------------------------- Alert ---------------------------- */

const alertIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
} as const;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof alertIcons;
  title?: string;
}

export function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  const Icon = alertIcons[variant];
  return (
    <div className={cn(`alert alert-${variant}`, className)} role="status" {...props}>
      <Icon size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}
