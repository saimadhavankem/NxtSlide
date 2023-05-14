import {Component} from 'react'
import Navbar from '../Navbar'
import SlideCard from '../SlideCard'
import RightPage from '../RightPage'
import './index.css'

class Home extends Component {
  state = {
    details: [
      {
        id: 'cc6e1752-a063-11ec-b909-0242ac120002',
        heading: 'Welcome',
        description: 'Rahul',
      },
    ],
    initialSlidesList: [
      {
        id: 'cc6e1752-a063-11ec-b909-0242ac120002',
        heading: 'Welcome',
        description: 'Rahul',
      },
      {
        id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
        heading: 'Agenda',
        description: 'Technologies in focus',
      },
      {
        id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
        heading: 'Cyber Security',
        description: 'Ethical Hacking',
      },
      {
        id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
        heading: 'IoT',
        description: 'Wireless Technologies',
      },
      {
        id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
        heading: 'AI-ML',
        description: 'Cutting-Edge Technology',
      },
      {
        id: 'cc6e2224-a063-11ec-b909-0242ac120002',
        heading: 'Blockchain',
        description: 'Emerging Technology',
      },
      {
        id: 'cc6e233c-a063-11ec-b909-0242ac120002',
        heading: 'XR Technologies',
        description: 'AR/VR Technologies',
      },
    ],
  }

  onClickCard = id => {
    const {initialSlidesList} = this.state
    const updatedDetails = initialSlidesList.filter(each => each.id === id)
    this.setState({details: updatedDetails})
  }

  onDetailsUpdate = (id, text) => {
    const {initialSlidesList} = this.state
    const updatedText = text
    const List = initialSlidesList.map(each => {
      if (each.id === id) {
        return {...each, heading: updatedText}
      }
      return each
    })
    this.setState({initialSlidesList: List})
  }

  render() {
    const {details, initialSlidesList} = this.state
    return (
      <div className="bg-container">
        <Navbar />
        <div className="flex-container">
          <div className="left-container">
            <div className="btn-container">
              <button type="button" className="btn-design">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                  alt="new plus icon"
                  className="btn-image"
                />
                New
              </button>
            </div>
            <ul className="slide-container">
              {initialSlidesList.map(each => (
                <SlideCard
                  onClickCard={this.onClickCard}
                  key={each.id}
                  details={each}
                />
              ))}
            </ul>
          </div>
          {details.map(each => (
            <RightPage
              onDetailsUpdate={this.onDetailsUpdate}
              key={each.id}
              PageDetails={each}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
