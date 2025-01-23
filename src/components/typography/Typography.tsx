import React from "react";
import styles from "./typography.module.css";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "body2";
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  // Map "body2" to "p" and handle other cases
  const Tag = variant === "body" || variant === "body2" ? "p" : variant;

  return (
    <Tag className={`${styles[variant] || ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;
