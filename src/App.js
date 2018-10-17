import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css'

import SiderMenu from './page/SiderMenu'
import ReactDnD from './page/ReactDnD'
import PerformanceDemo1 from './page/PerformanceDemo1'
import FiberDemo from './page/FiberDemo'
import ReactVirtualized from './page/ReactVirtualized'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div
              style={{
                position: 'fixed',
                left: '0',
                top: '0',
                width: '260px',
                height: '100%',
              }}
            >
              <SiderMenu />
            </div>
            <div style={{ marginLeft: '270px' }}>
              <Route exact path="/" component={ReactDnD} />
              <Route path="/PerformanceDemo1" component={PerformanceDemo1} />
              <Route path="/FiberDemo" component={FiberDemo} />
              <Route path="/ReactVirtualized" component={ReactVirtualized} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
