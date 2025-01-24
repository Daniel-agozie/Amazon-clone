// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./index.css";
import ContextProvider from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
      <ContextProvider>
      <Router>
      <App />
      </Router>
      </ContextProvider>
)
