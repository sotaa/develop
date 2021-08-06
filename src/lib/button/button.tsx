import React from "react";

export interface ButtonProps {
  type: "primary" | "success" | "light";
  size?: "lg" | "sm";
  className?: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: () => void;
}

const iconStyles: React.CSSProperties = {
  display: "flex",
  float: "right",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  marginLeft: 10,
  marginRight: -15,
  fontSize: 30,
};

const btnStyles: {
  primary: React.CSSProperties;
  success: React.CSSProperties;
  light: React.CSSProperties;
} = {
  primary: {
    background: "#3446e6",
  },
  success: {
    background: "#05a841",
  },
  light: {
    background: "none",
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "md",
  className,
  icon,
  loading = false,
  onClick,
}) => {
  const commonStyles: React.CSSProperties = {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    lineHeight: 2.9,
    fontSize: 16,
    padding: 0,
    border: "none",
  };

  if (icon) {
    commonStyles.padding = 0;
    commonStyles.paddingLeft = "1rem";
  }
  return (
    <button
      disabled={loading}
      className={`btn btn-${type} btn-${size} ${className}`}
      style={{ ...commonStyles, ...btnStyles[type] }}
      onClick={onClick}
    >
      {icon && <i style={{ ...iconStyles }}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
