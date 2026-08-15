import type { ReactNode } from "react";

export interface ButtonProps {
  /** リンク先（例: "/about/"） */
  href: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Markdownの [BUTTON: ラベル → /path/] に対応するボタン。
 */
export function Button({ href, className, children }: ButtonProps) {
  const classes = ["wf-button", className ?? ""].filter(Boolean).join(" ");
  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
