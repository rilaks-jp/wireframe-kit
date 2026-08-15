import type { CSSProperties, ReactNode } from "react";

export interface ColumnsProps {
  /** PCでのカラム数（SPでは常に縦積み） */
  columns?: number;
  className?: string;
  children?: ReactNode;
}

/**
 * PCでは指定カラム数のグリッド、SPでは縦積みになるレイアウト。
 */
export function Columns({ columns = 3, className, children }: ColumnsProps) {
  const classes = ["wf-columns", className ?? ""].filter(Boolean).join(" ");
  const style = { "--wf-columns": columns } as CSSProperties;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
