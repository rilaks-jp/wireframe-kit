import type { ReactNode } from "react";

export interface TwoColumnProps {
  /** SPで表示順を入れ替える（PC: そのまま / SP: 2番目→1番目の順） */
  spReverse?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * PCでは2カラム横並び、SPでは縦積みになるレイアウト。
 */
export function TwoColumn({ spReverse, className, children }: TwoColumnProps) {
  const classes = [
    "wf-two-column",
    spReverse ? "wf-two-column--sp-reverse" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
