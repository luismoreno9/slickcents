import Link from "next/link";
import { CATEGORY_COLORS, categorySlug } from "@/lib/articles";

interface Props {
  category: string;
  linked?: boolean;
  size?: "sm" | "md";
}

export default function CategoryBadge({ category, linked = true, size = "sm" }: Props) {
  const colors = CATEGORY_COLORS[category] ?? {
    bg: "bg-bark-100",
    text: "text-bark-700",
    border: "border-bark-200",
  };

  const cls = `category-badge border ${colors.bg} ${colors.text} ${colors.border} ${
    size === "md" ? "text-sm px-3 py-1.5" : "text-xs px-2.5 py-1"
  }`;

  if (linked) {
    return (
      <Link href={`/category/${categorySlug(category)}`} className={`${cls} hover:opacity-80 transition-opacity`}>
        {category}
      </Link>
    );
  }

  return <span className={cls}>{category}</span>;
}
