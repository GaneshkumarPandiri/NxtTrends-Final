import './index.css'

const CategoryItem = props => {
  const {
    categoryItem,
    selectCategory,
    selectedCategoryId,
    onCategoryInput,
  } = props
  const {categoryId, name} = categoryItem
  const onCategorySelect = () => {
    selectCategory(categoryId)
    onCategoryInput(categoryId)
  }
  const isCategorySelected =
    selectedCategoryId === categoryId ? 'selected-category' : ''
  return (
    <li className="category-list">
      <button
        type="button"
        className={`button-style ${isCategorySelected}`}
        onClick={onCategorySelect}
      >
        <p className="para-button">{name}</p>
      </button>
    </li>
  )
}
export default CategoryItem
