import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90",
      outline: "border border-gray-200 bg-white hover:bg-gray-100",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
    }
    
    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-10 px-4 text-sm",
      lg: "h-14 px-8 text-lg",
    }
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
    
    return <button className={classes} ref={ref} {...props} />
  }
)

Button.displayName = "Button"

export { Button }
