import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon = ({ name, className, size }: LucideIconProps) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};
