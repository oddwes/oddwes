import './App.css';
import { Box } from '@mui/material';
import Header from './components/Header';
import Greeting from './components/Greeting';

function App() {
  return (
    <Box className='App'>
      <Header />
      <Greeting />
    </Box>
  );
}

export default App;
