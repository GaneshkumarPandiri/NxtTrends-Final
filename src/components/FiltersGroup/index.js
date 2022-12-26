import {Component} from 'react'
import CategoryItem from '../CategoryItem'
import RatingsItem from '../RatingsItem'
import './index.css'

class FiltersGroup extends Component {
  state = {selectedCategoryId: ''}

  selectCategory = categoryId => {
    this.setState({selectedCategoryId: categoryId})
  }

  clearFilterOn = () => {
    this.setState({selectedCategoryId: ''})
  }

  render() {
    const {selectedCategoryId} = this.state
    const {
      categoryOptions,
      ratingsList,
      onSearchResults,
      onCategorySelect,
      onRatingSelect,
      onClearFilter,
    } = this.props
    const onSearchInput = event => {
      onSearchResults(event.target.value)
    }

    const onCategoryInput = categoryId => {
      onCategorySelect(categoryId)
    }

    const selectRating = value => {
      onRatingSelect(value)
    }

    const clearFilter = () => {
      onClearFilter()
      this.clearFilterOn()
    }
    return (
      <div>
        <input
          type="search"
          className="input-search-style"
          placeholder="Search"
          onChange={onSearchInput}
        />
        <h1 className="heading-filter">Category</h1>
        <ul>
          {categoryOptions.map(category => (
            <CategoryItem
              categoryItem={category}
              key={category.categoryId}
              selectCategory={this.selectCategory}
              selectedCategoryId={selectedCategoryId}
              onCategoryInput={onCategoryInput}
            />
          ))}
        </ul>
        <h1 className="heading-filter">Ratings</h1>
        <ul>
          {ratingsList.map(rating => (
            <RatingsItem
              ratingItem={rating}
              selectRating={selectRating}
              key={rating.ratingId}
            />
          ))}
        </ul>
        <button type="button" className="clear-filter" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
