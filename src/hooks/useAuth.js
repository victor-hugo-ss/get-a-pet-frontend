import api from '../utils/api';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// navigate('/login');

export default function useAuth() {
    async function register(user) {
        try {
            const data = await api
                .post('/users/register', user)
                .then((response) => {
                    return response.data;
                });

            console.log(data);
        } catch (error) {
            // Tratar o erro
            console.log(error);
        }
    }

    return { register };
}
