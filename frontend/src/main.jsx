
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from "react-router-dom";
import StoreContextProvider from './components/context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter basename="/Food_Delivary" >
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
