import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPose extends Component {
  render() {
    return (
      <section>
        <header>
          <nav>The Yogi Me</nav>
        </header>
        <main>
          <figure>
            <img src={require('../images/yoga_stock_img.jpg')} className="pose-detail-img" />
            <ol>
              <li>
                <h2>Sanskrit Name</h2>
              </li>
              <li>
                <h3>English Name</h3>
              </li>
              <li>Position Type</li>
            </ol>
            <h2>Steps to Get into the Pose</h2>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
            <figcaption>
              <h3>Description</h3>Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird
              of paradise pose crab pose staff pose flying crow pose.
            </figcaption>
          </figure>
        </main>
      </section>
    )
  }
}

export default YogaPose
