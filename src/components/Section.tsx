import type { ReactNode } from "react";

export interface SectionProps {
  /** セクション名（ワイヤー上に "FV" "ABOUT" などのラベルを表示する） */
  label?: string;
  /** 背景をグレーにして前後のセクションと区別する */
  fill?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Section({ label, fill, className, children }: SectionProps) {
  const classes = ["wf-section", fill ? "wf-section--fill" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      {label && <span className="wf-section__label">{label}</span>}
      {children}
    </section>
  );
}
