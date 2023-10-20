import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar/Navbar'; 
import './App.css';
import theme from './Theme/Theme';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Contacts from './Contacts/Contacts';
import About from './About/About';
import Cart from './Cart/Cart';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes> {/* Use Routes to wrap Route components */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
