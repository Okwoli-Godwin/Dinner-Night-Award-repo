import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "special" | 'special2';
  size?: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "medium",
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {text}
    </button>
  );
};

export default Button;
