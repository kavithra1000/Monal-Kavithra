'use client'
import React from 'react'

interface ButtonProps {
  name: string
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ name, className }, ref) => {
    return (
      <button type="button" ref={ref} className={`water-btn ${className}`}>
        {name}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
