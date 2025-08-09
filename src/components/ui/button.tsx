import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    default: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className as string)}
      {...props}
    >
      {children}
    </button>
  );
};
