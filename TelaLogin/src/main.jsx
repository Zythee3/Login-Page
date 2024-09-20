import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TelaLogin from './teste.jsx'
import TelaRegistrar from './TelaRegistrar/TelaRegistrar.jsx'
import CheckMark from './components/checkmark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelaRegistrar/>
  </StrictMode>,
)
