import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar/Navbar'; 
import './App.css';
import theme from './Theme/Theme';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Contacts from './Contacts/Contacts';
import About from './About/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes> {/* Use Routes to wrap Route components */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* Other routes will be added here */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
