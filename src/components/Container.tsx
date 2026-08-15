import type { ReactNode } from "react";

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  const classes = ["wf-container", className ?? ""].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
