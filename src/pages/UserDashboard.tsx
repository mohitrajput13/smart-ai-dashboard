
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { Download, TrendingUp, Puzzle, Target, Crown } from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-purple-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}! 👋</h2>
        <p className="text-purple-100">
          Ready to make some intelligent predictions today?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predictors Used</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <Badge variant="secondary" className="mt-1">Free Plan</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Usage</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7/10</div>
            <Progress value={70} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              3 predictions remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Extensions</CardTitle>
            <Puzzle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Active browser extensions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              Predict accuracy this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Chrome Extension</span>
            </CardTitle>
            <CardDescription>
              Download and install our Chrome extension to start making predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-4">
              <Download className="mr-2 h-4 w-4" />
              Download Chrome Extension
            </Button>
            <div className="text-sm text-gray-600">
              <p className="mb-2"><strong>Features:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time predictions on supported websites</li>
                <li>Easy one-click installation</li>
                <li>Seamless integration with your dashboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="h-5 w-5" />
              <span>Subscription Info</span>
            </CardTitle>
            <CardDescription>
              Current plan and upgrade options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Plan</span>
                <Badge variant="outline">Free</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Monthly Predictions</span>
                <span className="text-sm">10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Browser Extensions</span>
                <span className="text-sm">1</span>
              </div>
              <Link to="/dashboard/subscription">
                <Button variant="outline" className="w-full">
                  Upgrade Plan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest predictions and results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Stock Price Prediction</p>
                <p className="text-sm text-gray-600">AAPL - Apple Inc.</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800">Successful</Badge>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Crypto Trend Analysis</p>
                <p className="text-sm text-gray-600">BTC - Bitcoin</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800">Successful</Badge>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Market Prediction</p>
                <p className="text-sm text-gray-600">S&P 500 Index</p>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
