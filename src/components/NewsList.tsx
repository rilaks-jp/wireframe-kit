export interface NewsItem {
  /** 日付（例: "2026.01.01"） */
  date: string;
  /** タイトル */
  title: string;
  /** リンク先（省略可） */
  href?: string;
}

export interface NewsListProps {
  items: NewsItem[];
  className?: string;
}

/**
 * お知らせ一覧。日付＋タイトルのリストを表示する。
 */
export function NewsList({ items, className }: NewsListProps) {
  const classes = ["wf-news", className ?? ""].filter(Boolean).join(" ");
  return (
    <ul className={classes}>
      {items.map((item, index) => (
        <li className="wf-news__item" key={index}>
          <span className="wf-news__date">{item.date}</span>
          <p className="wf-news__title">
            {item.href ? <a href={item.href}>{item.title}</a> : item.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
