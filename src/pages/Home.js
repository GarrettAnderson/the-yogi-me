import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section>
        <header>
          <h1>The Yogi Me</h1>
        </header>
        <main>
          <section>
            <h3>Fun Facts</h3>
          </section>
          <section>
            <h3>Pose Directory</h3>
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
