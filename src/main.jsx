import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetGlobal from './components/reset.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetGlobal/>
    <App />
  </React.StrictMode>,
)
