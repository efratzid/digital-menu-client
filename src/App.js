import './App.css';
import { Routes, Route,Link as RouterLink, Navigate} from 'react-router-dom'
import { AppBar, Toolbar, Box, Typography,Button,Link } from '@mui/material'
import Category from './components/category';
import MainPage from './components/mainPage';

function App() {
  return (
    <div>
        
        <Routes>
            <Route path="/dishes" element={<Category/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/" element={<Navigate to='/main'/>}/>
        </Routes>
    </div>
  );
}

export default App;
