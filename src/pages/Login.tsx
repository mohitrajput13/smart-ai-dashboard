
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Target, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isAdminLogin = location.pathname.includes('/admin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login(email, password, isAdminLogin ? 'admin' : 'user');
      if (success) {
        toast.success('Login successful!');
        navigate(isAdminLogin ? '/admin/dashboard' : '/dashboard');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">AI Predictor</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isAdminLogin ? 'Admin Login' : 'Welcome Back'}
          </h1>
          <p className="text-gray-600">
            {isAdminLogin ? 'Access your admin dashboard' : 'Sign in to your account'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isAdminLogin ? 'Admin Sign In' : 'Sign In'}</CardTitle>
            <CardDescription>
              Enter your credentials to access your {isAdminLogin ? 'admin ' : ''}dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {!isAdminLogin && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            )}

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Demo credentials:</p>
              <p>User: user@example.com / password</p>
              {isAdminLogin && <p>Admin: admin@example.com / admin123</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
