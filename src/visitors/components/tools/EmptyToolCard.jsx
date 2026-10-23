import "./css/EmptyToolCard.css";
import { Search } from "lucide-react";

export default function EmptyToolCard({setSearch, setActiveCategory}) {
  return (
    <div className="tools-empty-state">
      <Search size={32} />
        <h3>No tools found</h3>
        <p>
          Try another search term or select a different
          category.
        </p>
        <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("");
            }}
        >
          Clear Filters
        </button>
    </div>
  )
}
