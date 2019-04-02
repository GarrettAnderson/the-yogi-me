import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPoses extends Component {
  render() {
    return (
      <section>
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="pose-directory-container">
          <ol>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
            <li>
              <img
                src={require('../images/yoga_stock_img.jpg')}
                className="pose-gallery-img"
                alt="specific-yoga-pose-img"
              />
              <p>Yoga Pose Name</p>
            </li>
          </ol>
        </main>
      </section>
    )
  }
}

export default YogaPoses
