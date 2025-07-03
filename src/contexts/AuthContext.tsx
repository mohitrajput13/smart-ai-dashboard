
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: 'user' | 'admin') => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing token on mount
    const token = Cookies.get('auth_token');
    const userData = Cookies.get('user_data');
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        Cookies.remove('auth_token');
        Cookies.remove('user_data');
      }
    }
  }, []);

  const login = async (email: string, password: string, role: 'user' | 'admin' = 'user'): Promise<boolean> => {
    // Mock authentication - replace with real API call
    const mockUsers = [
      { id: '1', email: 'user@example.com', password: 'password', name: 'John Doe', role: 'user' as const },
      { id: '2', email: 'admin@example.com', password: 'admin123', name: 'Admin User', role: 'admin' as const }
    ];

    const foundUser = mockUsers.find(u => u.email === email && u.password === password && u.role === role);
    
    if (foundUser) {
      const userData = { id: foundUser.id, email: foundUser.email, name: foundUser.name, role: foundUser.role };
      const token = `mock_token_${foundUser.id}`;
      
      Cookies.set('auth_token', token, { expires: 7 });
      Cookies.set('user_data', JSON.stringify(userData), { expires: 7 });
      setUser(userData);
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Mock signup - replace with real API call
    const userData = { id: Date.now().toString(), email, name, role: 'user' as const };
    const token = `mock_token_${userData.id}`;
    
    Cookies.set('auth_token', token, { expires: 7 });
    Cookies.set('user_data', JSON.stringify(userData), { expires: 7 });
    setUser(userData);
    return true;
  };

  const logout = () => {
    Cookies.remove('auth_token');
    Cookies.remove('user_data');
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
