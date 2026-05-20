import api from '../utils/api';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';

// const navigate = useNavigate();
// navigate('/login');

export default function useAuth() {
    const { setFlashMessage } = useFlashMessage();

    async function register(user) {
        let msgText = 'Cadastro realizado com sucesso!';
        let msgType = 'sucess';

        try {
            const data = await api
                .post('/users/register', user)
                .then((response) => {
                    return response.data;
                });

            console.log(data);
        } catch (error) {
            // Tratar o erro
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType);
    }

    return { register };
}
