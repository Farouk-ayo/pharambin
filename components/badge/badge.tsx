import React from "react";

interface BadgeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  bgColor = "bg-tertiary",
  textColor = "text-primary",
  className,
}) => {
  return (
    <div
      className={`inline-block ${bgColor} ${textColor} text-sm font-semibold px-3 py-1 rounded-lg ${className}`}
    >
      {text}
    </div>
  );
};

export default Badge;
