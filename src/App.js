import './App.css';
import { Box } from '@mui/material';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Personal from './components/Personal';

function App() {
  return (
    <Box>
      <Header />
      <Greeting />
      <Personal />
    </Box>
  );
}

export default App;
