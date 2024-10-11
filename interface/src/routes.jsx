import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pessoa from './pages/Pessoa/Pessoa';
import Login from './pages/Login/Login';
import AuthRequests from '../src/fetch/AuthRequests'; // Verifique o caminho correto para este arquivo
import ProtectedRoute from './components/Rotas/ProtectedRoutes';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path='/pessoas' element={<ProtectedRoute element={Pessoa}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;