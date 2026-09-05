// Installed via: npx shadcn@latest add "https://21st.dev/r/ekmas/button"
// 21st.dev Button — https://21st.dev/r/ekmas/button
// Neobrutalism-styled button component.

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] border-2 text-sm font-[var(--base-font-weight)] ring-offset-[var(--ringOffset)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--main)] text-[var(--mtext)] border-[var(--border)] shadow-[var(--boxShadowX)_var(--boxShadowY)_0_0_var(--border)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_var(--border)] active:translate-x-[var(--boxShadowX)] active:translate-y-[var(--boxShadowY)] active:shadow-none",
        noShadow: "bg-[var(--main)] text-[var(--mtext)] border-[var(--border)]",
        neutral:
          "bg-[var(--bw)] text-[var(--text)] border-[var(--border)] shadow-[var(--boxShadowX)_var(--boxShadowY)_0_0_var(--border)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-[var(--boxShadowX)] active:translate-y-[var(--boxShadowY)] active:shadow-none",
        reverse:
          "bg-[var(--main)] text-[var(--mtext)] border-[var(--border)] shadow-[var(--reverseBoxShadowX)_var(--reverseBoxShadowY)_0_0_var(--border)] hover:translate-x-[-1px] hover:translate-y-[1px] hover:shadow-[-2px_2px_0_0_var(--border)] active:translate-x-[var(--reverseBoxShadowX)] active:translate-y-[var(--reverseBoxShadowY)] active:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[calc(var(--radius)-2px)] px-3",
        lg: "h-11 rounded-[calc(var(--radius)-2px)] px-8",
        icon: "h-10 w-10",
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
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
