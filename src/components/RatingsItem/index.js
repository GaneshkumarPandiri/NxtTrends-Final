import './index.css'

const RatingItem = props => {
  const {ratingItem, selectRating} = props
  const {ratingId, imageUrl} = ratingItem
  const onRanting = () => {
    selectRating(ratingId)
  }
  return (
    <li className="rating-list">
      <button type="button" className="rating-list">
        <img
          src={imageUrl}
          alt={`rating ${ratingId}`}
          className="rating-image"
          onClick={onRanting}
        />
        <p className="rating-para">& UP</p>
      </button>
    </li>
  )
}
export default RatingItem
