import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Es necesario importar Bootstrap en el archivo principal (e.g., index.css o App.jsx)
import 'bootstrap/dist/css/bootstrap.min.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
