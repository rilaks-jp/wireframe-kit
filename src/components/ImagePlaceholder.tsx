import type { CSSProperties } from "react";

export interface ImagePlaceholderProps {
  /** 画像の内容を示すラベル（例: "メインビジュアル"） */
  label?: string;
  /** アスペクト比（例: "16 / 9", "1 / 1"）。デフォルトは 16 / 9 */
  ratio?: string;
  className?: string;
}

/**
 * Markdownの [IMAGE] / [IMAGE: ラベル] に対応する画像プレースホルダー。
 */
export function ImagePlaceholder({ label, ratio, className }: ImagePlaceholderProps) {
  const classes = ["wf-placeholder", "wf-placeholder--image", className ?? ""]
    .filter(Boolean)
    .join(" ");
  const style = ratio ? ({ "--wf-placeholder-ratio": ratio } as CSSProperties) : undefined;

  return (
    <div className={classes} style={style} role="img" aria-label={label ?? "画像"}>
      <span className="wf-placeholder__label">{label ?? "IMAGE"}</span>
    </div>
  );
}
