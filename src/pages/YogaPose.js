import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class YogaPose extends Component {
  render() {
    return (
      <section className="single-pose-container">
        <header className="header-nav">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="single-pose-details">
          {/* <figure> */}
          <img src={require('../images/yoga_stock_img.jpg')} className="pose-detail-img" alt="tree-pose-image" />
          <ol className="pose-details-list">
            <li>Sanskrit Name</li>
            <li>English Name</li>
            <li>Position Type</li>
          </ol>
          <h5>Steps to Get into the Pose</h5>
          <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
          </ol>
          {/* <figcaption> */}
          <h3>Description</h3>Handstand half moon pose half boat pose eight angle pose child's pose frog pose bird of
          paradise pose crab pose staff pose flying crow pose.
          {/* </figcaption>
          </figure> */}
        </main>
      </section>
    )
  }
}

export default YogaPose
