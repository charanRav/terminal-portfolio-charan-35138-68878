
import { Filter, Search, X } from "lucide-react";
import { useState } from "react";

interface ProjectFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const ProjectFilterSection = ({
  categories,
  selectedCategories,
  onCategoryChange,
  searchTerm,
  onSearchChange
}: ProjectFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    onCategoryChange([]);
    onSearchChange("");
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            {selectedCategories.length > 0 && (
              <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                {selectedCategories.length}
              </span>
            )}
          </button>

          {(selectedCategories.length > 0 || searchTerm) && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Filter Options */}
      {isFilterOpen && (
        <div className="mt-4 p-4 bg-muted/5 rounded-xl border border-border/20 animate-slide-up">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategories.includes(category)
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
