import type React from "react"
import styles from "./Button.module.css"

type ButtonProps = {
  text: string
  variant?: "primary" | "secondary" | "outline" | "special" | "special2"
  size?: "small" | "medium" | "large"
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", size = "medium", onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {text} 
    </button>
  )
}

export default Button

