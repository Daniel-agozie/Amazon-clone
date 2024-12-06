import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";
import ContextProvider from './Context/ContextProvider';

createRoot(document.getElementById('root')).render(
      <ContextProvider>
      <App />
      </ContextProvider>

)
