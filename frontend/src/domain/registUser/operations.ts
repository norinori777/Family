// TypescriptでReactのHooksを作成する
// - axiosを使って、APIを叩く
// - APIのレスポンスを受け取って、Sateに保存する
// - axiosのエラーをキャッチして、エラーメッセージを表示する
// - axiosの動作中に、ローディングを表示する

import { useState } from 'react';
import axios from 'axios';
import { RegistUser } from './types';

export const useRegistUser = () => {
    const [user, setUser] = useState<RegistUser | null>(null);
    const [error, setError] = useState<Error | null | unknown>(null);
    const [loading, setLoading] = useState(false);
    
    const registUser = async (user: RegistUser) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/RegistUser', user);
            setUser(response.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    
    return { user, error, loading, registUser };
};

