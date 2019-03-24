import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPoses extends Component {
  render() {
    return (
      <section>
        <header>
          <nav>The Yogi Me</nav>
        </header>
        <main>
          <ol>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img src={require('../images/yoga_stock_img.jpg')} className="pose-gallery-img" />
              <p>Yoga Pose Name</p>
            </li>
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaPoses
