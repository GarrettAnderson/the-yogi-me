import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:YogaHistory" component={YogaHistory} />
            <Route exact path="/:YogaPoses" component={YogaPoses} />
            <Route exact path="/:YogaPoses/:id" component={YogaPose} />
            <Route exact path="/:YogaSequences" component={YogaSequences} />
            <Route exact path="/:YogaSequenceBuilder" component={YogaSequenceBuilder} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
