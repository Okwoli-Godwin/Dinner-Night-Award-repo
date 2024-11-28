import React from "react";
import styles from "./container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = "lg",
}) => {
  return (
    <div className={`${styles.container} ${styles[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
