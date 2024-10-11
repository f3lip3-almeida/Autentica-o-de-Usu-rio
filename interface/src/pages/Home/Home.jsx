import React from 'react';
import Navegacao from "../../components/Navegacao/Navegacao";
import AuthRequests from '../../fetch/AuthRequests'; // Certifique-se de que o caminho está correto

function Home() {

    return (
        <>
            <Navegacao />
            <h1 style={{ textAlign: 'center', marginTop: '2.5%' }}>
                Seja bem-vindo à aula de Autenticação usando JWT
            </h1>
        </>
    );
}

export default Home;