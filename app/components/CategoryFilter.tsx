interface Props {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="category-filter">
      <label className="category-label" htmlFor="category-select">
        Filtrar por categoría:
      </label>
      <select
        id="category-select"
        className="category-select"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}