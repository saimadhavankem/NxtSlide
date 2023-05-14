import './index.css'

const SlideCard = props => {
  const {details, onClickCard} = props
  const {id, heading, description} = details
  const buttonClicked = () => {
    onClickCard(id)
  }
  const color = '#dbeafe'
  return (
    <li style={{backgroundColor: color}} className="card-container">
      <button type="button" onClick={buttonClicked} className="card">
        <h1 className="slide-heading">{heading}</h1>
        <p className="slide-para">{description}</p>
      </button>
    </li>
  )
}

export default SlideCard
