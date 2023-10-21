import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar/Navbar'; 
import './App.css';
import theme from './Theme/Theme';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Contacts from './Contacts/Contacts';
import About from './About/About';
import Cart from './Cart/Cart';
import {Provider, useDispatch} from 'react-redux';
import store, {AppDispatch} from './Store/Store';
import { useEffect, useState } from 'react';
import DisclaimerModal from './Components/DisclamerModal/DisclamerModal';
import {getSomeStocks} from "./Store/SwipingSlice";

function App() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState<boolean>(false);
  
  useEffect(() => {
    const accepted = localStorage.getItem('hasAcceptedDisclaimer');
    if (accepted) {
      setHasAcceptedDisclaimer(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem('hasAcceptedDisclaimer', 'true');
    setHasAcceptedDisclaimer(true);
  };

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
            <DisclaimerModal isOpen={!hasAcceptedDisclaimer} onAccept={handleAccept} />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
