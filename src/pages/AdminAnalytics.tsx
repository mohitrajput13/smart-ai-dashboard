
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, Globe, Activity, Target } from 'lucide-react';

const AdminAnalytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">System-wide analytics and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Predictions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Website Coverage</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              Active websites
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Predictions</CardTitle>
            <CardDescription>Number of predictions made per day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Chart visualization would go here</p>
                <p className="text-sm text-gray-400">Integration with charting library needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Growth chart would go here</p>
                <p className="text-sm text-gray-400">Integration with charting library needed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent System Activity</CardTitle>
          <CardDescription>Latest system events and user activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Activity className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-600">user@example.com joined the platform</p>
              </div>
              <span className="text-xs text-gray-500">2 minutes ago</span>
            </div>
            
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <Globe className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Website added</p>
                <p className="text-sm text-gray-600">New website example.com was added to the system</p>
              </div>
              <span className="text-xs text-gray-500">15 minutes ago</span>
            </div>
            
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <Target className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">High prediction accuracy</p>
                <p className="text-sm text-gray-600">System achieved 98% accuracy on stock predictions</p>
              </div>
              <span className="text-xs text-gray-500">1 hour ago</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Users className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Peak usage reached</p>
                <p className="text-sm text-gray-600">1,500 concurrent users active on the platform</p>
              </div>
              <span className="text-xs text-gray-500">3 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
