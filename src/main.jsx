import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider as ReduxProvider} from "react-redux"  //react-redux
import store from "./Redux/store"; //JS
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
