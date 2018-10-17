import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// const AsyncMode = React.unstable_AsyncMode;

// const DeferredUpdates = ReactDOM.unstable_deferredUpdates;

ReactDOM.render(<App />, document.getElementById('root'))

// DeferredUpdates(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });

// ReactDOM.render(
//   <AsyncMode>
//     <App />
//   </AsyncMode>,
//   document.getElementById("root")
// );

registerServiceWorker()
