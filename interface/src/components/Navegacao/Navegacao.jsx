import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import AuthRequests from '../../fetch/AuthRequests';
import { useState } from 'react';

function Navegacao() {
    // estado para controlar se o usuário esta logado ou não
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const estiloNavOptions = {
        color: 'var(--fontColor)',
    }

    const logout = () => {
        AuthRequests.removeToken();
    }

    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                    </Nav>
                    <Button href='/login' variant='light'>Login</Button>
                    <Button variant='light' onClick={logout}>Sair</Button>  {/* botão para o usuário sair do sistema */}
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;