import type { CSSProperties } from "react";

export interface UIPlaceholderProps {
  /** UIの内容を示すラベル（例: "管理画面"） */
  label?: string;
  /** アスペクト比（例: "16 / 9"）。デフォルトは 16 / 9 */
  ratio?: string;
  className?: string;
}

/**
 * Markdownの [UI: ラベル] に対応するUIプレースホルダー。
 * ブラウザ風の枠で「画面である」ことを表現する。
 */
export function UIPlaceholder({ label, ratio, className }: UIPlaceholderProps) {
  const classes = ["wf-placeholder", "wf-placeholder--ui", className ?? ""]
    .filter(Boolean)
    .join(" ");
  const style = ratio ? ({ "--wf-placeholder-ratio": ratio } as CSSProperties) : undefined;

  return (
    <div className={classes} style={style} role="img" aria-label={label ?? "UI"}>
      <span className="wf-placeholder__label">{label ?? "UI"}</span>
    </div>
  );
}
