import { type ReactNode } from "react";

interface IconListItem {
  icon?: ReactNode;
  title?: string;
  text: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
  columns?: 1 | 2 | 3;
}

export default function IconList({ items, columns = 1 }: IconListProps) {
  return (
    <ul
      className="icon-list"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "16px",
        listStyle: "none",
        padding: 0,
        margin: "24px 0",
      }}
    >
      {items.map((item, i) => (
        <li key={i} className="icon-list__item">
          <span className="icon-list__icon" aria-hidden="true">
            {item.icon ?? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>
          <div className="icon-list__body">
            {item.title && <strong className="icon-list__title">{item.title}</strong>}
            <span className="icon-list__text">{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
