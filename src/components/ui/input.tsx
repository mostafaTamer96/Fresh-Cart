import * as React from "react"
import { cn } from "@/lib/utils"
export { Input }

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "h-8 w-full min-w-0 rounded-lg border border-[#99A1AF66] bg-transparent px-2.5 py-1 text-base transition-colors outline-none",
        
        // Force black text color
        "text-black dark:text-white",                    // ← Added this line

        // File input styles
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",

        // Placeholder and Focus styles
        "placeholder:text-muted-foreground focus-visible:border-[#22C55E] focus-visible:ring-2 focus-visible:ring-[#22C55E]/20",

        // Disabled styles
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",

        // Invalid styles
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",

        // Responsive and Dark mode adjustments
        "md:text-sm dark:bg-input/30 dark:disabled:bg-input/80",
        
        className
      )}
      {...props}
    />
  )
}