
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        skill: "border-transparent bg-accent/20 text-accent hover:bg-accent/30",
        yellow: "border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
        blue: "border-transparent bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        green: "border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20",
        orange: "border-transparent bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
        purple: "border-transparent bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
