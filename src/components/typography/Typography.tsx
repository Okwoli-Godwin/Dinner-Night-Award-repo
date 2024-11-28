import React from "react";
import styles from "./typography.module.css";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  const Tag = variant === "body" ? "p" : variant;

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;
