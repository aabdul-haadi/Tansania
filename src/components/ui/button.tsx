import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border border-transparent hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border-white/20 shadow-lg shadow-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-white text-secondary hover:bg-white/10 hover:backdrop-blur-md hover:text-secondary shadow-sm",
        secondary:
          "bg-muted text-secondary hover:bg-secondary hover:text-white",
        ghost: "text-secondary hover:bg-muted hover:text-secondary",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "bg-white/95 text-secondary border border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-md shadow-xl",
      },
      size: {
        default: "h-10 md:h-12 px-4 md:px-6",
        sm: "h-8 md:h-9 rounded-md px-2.5 md:px-3",
        lg: "h-12 md:h-14 rounded-md px-6 md:px-10",
        xl: "h-12 md:h-16 px-8 md:px-12 rounded-full",
        icon: "h-9 w-9 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        suppressHydrationWarning
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }