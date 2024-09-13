// pages/index.js
import { useState, useEffect } from 'react';
import LoginButton from '@/components/LoginButton';
import AccountSelector from '@/components/AccountSelector';
import TradeForm from '@/components/TradeForm';
import axios from 'axios';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');

  const handleLogin = async () => {
    window.location.href = `https://oauth.deriv.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_DERIV_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DERIV_REDIRECT_URI}`;
  };

  const fetchAccounts = async (token) => {
    try {
      const response = await axios.get('/api/fetchAccounts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAccounts(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    
    if (code) {
      axios.get(`/api/auth?code=${code}`).then((response) => {
        fetchAccounts(response.data.token);
      });
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoginButton onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Deriv Trading Interface</h1>
      <AccountSelector
        accounts={accounts}
        selectedAccount={selectedAccount}
        onChange={setSelectedAccount}
      />
      <TradeForm />
    </div>
  );
}
