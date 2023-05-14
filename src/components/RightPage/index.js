import {useState} from 'react'
import './index.css'

const RightPage = props => {
  const {PageDetails, onDetailsUpdate} = props
  const {heading, id, description} = PageDetails
  const [text, setText] = useState(heading)

  const onTextUpdate = event => {
    setText(event.target.value)
    onDetailsUpdate(id, text)
  }

  return (
    <div className="Right-container">
      <div className="page">
        <input onChange={onTextUpdate} className="page-heading" value={text} />
        <p className="page-para">{description}</p>
      </div>
    </div>
  )
}

export default RightPage
