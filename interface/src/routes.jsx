import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pessoa from './pages/Pessoa/Pessoa';
import Login from './pages/Login/Login';
import AuthRequests from '../src/fetch/AuthRequests'; // Verifique o caminho correto para este arquivo

// Função de proteção de rota privada
const PrivateRoute = ({ element }) => {
    const isAuthenticated = AuthRequests.checkTokenExpiry(); // Verifica se o token é válido
    return isAuthenticated ? element : <Navigate to="/login" />; // Redireciona para login se não autenticado
};

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                {/* Protege a rota /pessoas */}
                <Route path='/pessoas' element={<PrivateRoute element={<Pessoa />} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;