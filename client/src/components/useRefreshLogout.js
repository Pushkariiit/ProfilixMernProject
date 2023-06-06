import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRefreshLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRefresh = (event) => {
      if (event.currentTarget.performance.navigation.type === 1) {
        // Refresh detected, perform logout action
        // For example, clear user details and log out
        // Implement your own logout logic here
        console.log('Refreshing the page...');
        navigate('/logout');
      }
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);
};

export default useRefreshLogout;
