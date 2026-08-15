import type { ReactNode } from "react";

export interface MoreLinkProps {
  /** リンク先（例: "/service/a/"） */
  href: string;
  className?: string;
  /** リンクテキスト。デフォルトは "MORE" */
  children?: ReactNode;
}

/**
 * Markdownの [MORE → /path/] に対応するテキストリンク。
 */
export function MoreLink({ href, className, children }: MoreLinkProps) {
  const classes = ["wf-more", className ?? ""].filter(Boolean).join(" ");
  return (
    <a className={classes} href={href}>
      {children ?? "MORE"}
    </a>
  );
}
