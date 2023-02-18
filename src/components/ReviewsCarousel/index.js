import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count <= reviewsList.length - 2) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="review-card">
          <h1 className="heading">Reviews</h1>
          <div className="image-container">
            <img
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
              className="profile-image"
            />
          </div>
          <div className="arrow-name-arrow-container">
            <div className="arrow-container">
              <button
                className="arrow-btn"
                type="button"
                data-testid="leftArrow"
                onClick={this.onClickLeftArrow}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt=" left arrow"
                  className="arrow-icon"
                />
              </button>
            </div>

            <div className="name-container">
              <p className="user-name">{reviewsList[count].username}</p>
            </div>

            <div className="arrow-container">
              <button
                className="arrow-btn"
                type="button"
                data-testid="rightArrow"
                onClick={this.onClickRightArrow}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt=" right arrow"
                  className="arrow-icon"
                />
              </button>
            </div>
          </div>
          <p className="company-name">{reviewsList[count].companyName}</p>
          <p className="company-review">{reviewsList[count].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
