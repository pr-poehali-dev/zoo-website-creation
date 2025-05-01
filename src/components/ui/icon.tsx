
import * as React from "react";
import { IconProps as LucideIconProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends Omit<LucideIconProps, "ref"> {
  name: string;
  fallback?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback, className, ...props }, ref) => {
    // Get the icon component dynamically
    const IconComponent =
      (LucideIcons as Record<string, React.ComponentType<LucideIconProps>>)[
        name
      ] ||
      (fallback
        ? (LucideIcons as Record<string, React.ComponentType<LucideIconProps>>)[
            fallback
          ]
        : null);

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found${fallback ? ` and fallback "${fallback}" not found` : ""}.`);
      return null;
    }

    return (
      <IconComponent
        ref={ref}
        className={cn("", className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
