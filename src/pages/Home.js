import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section>
        <header className="homepage-header">
          <Link to="/">
            <h1>The Yogi Me</h1>
          </Link>
        </header>
        <main className="home-page-container">
          <section>
            <Link to="/YogaHistory">
              <h3>Fun Facts</h3>
            </Link>
          </section>
          <section>
            <Link to="/YogaPoses">
              <h3>Pose Directory</h3>
            </Link>
          </section>
          <section>
            <Link to="/YogaSequenceBuilder">
              <h3>Your Classes</h3>
            </Link>
          </section>
        </main>
      </section>
    )
  }
}

export default Home
