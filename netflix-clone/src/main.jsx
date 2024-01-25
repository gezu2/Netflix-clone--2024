import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// https://api.themoviedb.org/3/discover/tv?api_key=b721bb3157f7ee65784560f16daebd00&with_networks=213