import type { CSSProperties } from "react";

export interface VideoPlaceholderProps {
  /** 動画の内容を示すラベル（例: "サービス紹介動画"） */
  label?: string;
  /** アスペクト比（例: "16 / 9"）。デフォルトは 16 / 9 */
  ratio?: string;
  className?: string;
}

/**
 * Markdownの [VIDEO] / [VIDEO: ラベル] に対応する動画プレースホルダー。
 */
export function VideoPlaceholder({ label, ratio, className }: VideoPlaceholderProps) {
  const classes = ["wf-placeholder", "wf-placeholder--video", className ?? ""]
    .filter(Boolean)
    .join(" ");
  const style = ratio ? ({ "--wf-placeholder-ratio": ratio } as CSSProperties) : undefined;

  return (
    <div className={classes} style={style} role="img" aria-label={label ?? "動画"}>
      <span className="wf-placeholder__icon" aria-hidden="true" />
      <span className="wf-placeholder__label">{label ?? "VIDEO"}</span>
    </div>
  );
}
