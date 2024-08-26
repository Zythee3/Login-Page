import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TelaLogin from './TelaLogin.jsx'
import SistemaLogin from './SistemaLogin/SistemaLogin.jsx'
import CheckMark from './components/checkmark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SistemaLogin/>
  </StrictMode>,
)
