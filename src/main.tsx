import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ColorContextProvider } from './context/ColorContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ColorContextProvider>
    <App />
  </ColorContextProvider>
)
