
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Target, 
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  Clock
} from 'lucide-react';

const AdminAnalytics = () => {
  const analyticsData = {
    overview: [
      {
        title: "Total Users",
        value: "12,847",
        change: "+12.5%",
        changeType: "increase",
        icon: Users,
        color: "text-blue-600"
      },
      {
        title: "Active Predictions", 
        value: "8,293",
        change: "+18.2%",
        changeType: "increase",
        icon: Target,
        color: "text-green-600"
      },
      {
        title: "Revenue",
        value: "$94,180",
        change: "+15.3%",
        changeType: "increase",
        icon: DollarSign,
        color: "text-purple-600"
      },
      {
        title: "Accuracy Rate",
        value: "94.2%",
        change: "+2.1%",
        changeType: "increase",
        icon: TrendingUp,
        color: "text-orange-600"
      }
    ],
    userGrowth: [
      { month: "Jan", users: 2840, predictions: 12450 },
      { month: "Feb", users: 3650, predictions: 15630 },
      { month: "Mar", users: 4720, predictions: 18920 },
      { month: "Apr", users: 5980, predictions: 22340 },
      { month: "May", users: 7230, predictions: 28750 },
      { month: "Jun", users: 9120, predictions: 35260 },
      { month: "Jul", users: 12847, predictions: 41830 }
    ],
    topWebsites: [
      { url: "example.com", predictions: 15430, accuracy: 95.2, users: 2840 },
      { url: "demo.com", predictions: 12850, accuracy: 93.8, users: 2156 },
      { url: "marketplace.io", predictions: 9640, accuracy: 96.1, users: 1892 },
      { url: "trading.com", predictions: 7320, accuracy: 92.4, users: 1634 },
      { url: "predict.net", predictions: 5980, accuracy: 94.7, users: 1245 }
    ],
    planDistribution: [
      { plan: "Free", users: 8450, percentage: 65.8, revenue: 0 },
      { plan: "Pro", users: 3247, percentage: 25.3, revenue: 94180 },
      { plan: "Enterprise", users: 1150, percentage: 8.9, revenue: 113850 }
    ],
    recentActivity: [
      { type: "user_signup", count: 147, change: "+23%" },
      { type: "predictions_made", count: 2893, change: "+15%" },
      { type: "subscriptions", count: 89, change: "+31%" },
      { type: "api_calls", count: 45621, change: "+8%" }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">Comprehensive insights into platform performance and user behavior</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.overview.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant={stat.changeType === 'increase' ? 'default' : 'secondary'} className="text-xs">
                  {stat.change}
                </Badge>
                <p className="text-xs text-gray-500">from last month</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="websites">Websites</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* User Growth Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>User Growth Trend</span>
                </CardTitle>
                <CardDescription>Monthly user acquisition and prediction volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.userGrowth.slice(-4).map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{data.month} 2024</p>
                        <p className="text-sm text-gray-500">{data.users.toLocaleString()} users</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{data.predictions.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">predictions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>Last 24 hours activity summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium capitalize">{activity.type.replace('_', ' ')}</p>
                        <p className="text-sm text-gray-500">Count: {activity.count.toLocaleString()}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {activity.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Plan Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  <span>Plan Distribution</span>
                </CardTitle>
                <CardDescription>User distribution across subscription plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.planDistribution.map((plan, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant={plan.plan === 'Enterprise' ? 'default' : plan.plan === 'Pro' ? 'secondary' : 'outline'}>
                            {plan.plan}
                          </Badge>
                          <span className="font-medium">{plan.users.toLocaleString()} users</span>
                        </div>
                        <span className="text-sm text-gray-500">{plan.percentage}%</span>
                      </div>
                      <Progress value={plan.percentage} className="h-2" />
                      {plan.revenue > 0 && (
                        <p className="text-xs text-gray-500">Revenue: ${plan.revenue.toLocaleString()}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>User Activity Timeline</span>
                </CardTitle>
                <CardDescription>Recent user registration trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-green-600">147</p>
                      <p className="text-sm text-gray-500">New users today</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">1,023</p>
                      <p className="text-sm text-gray-500">This week</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">4,567</p>
                      <p className="text-sm text-gray-500">This month</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">89.2%</p>
                      <p className="text-sm text-gray-500">Retention rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="websites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Top Performing Websites</span>
              </CardTitle>
              <CardDescription>Websites ranked by prediction volume and accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topWebsites.map((website, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{website.url}</p>
                        <p className="text-sm text-gray-500">{website.users.toLocaleString()} active users</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-semibold">{website.predictions.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">predictions</p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          {website.accuracy}% accuracy
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Revenue Metrics</span>
                </CardTitle>
                <CardDescription>Monthly recurring revenue and growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">MRR</p>
                      <p className="text-2xl font-bold">$94,180</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Growth</p>
                      <p className="text-2xl font-bold text-green-600">+15.3%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">ARPU</p>
                      <p className="text-2xl font-bold">$29.02</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Churn Rate</p>
                      <p className="text-2xl font-bold text-red-600">2.1%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Plan</CardTitle>
                <CardDescription>Revenue breakdown by subscription tier</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.planDistribution.filter(p => p.revenue > 0).map((plan, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant={plan.plan === 'Enterprise' ? 'default' : 'secondary'}>
                          {plan.plan}
                        </Badge>
                        <span>{plan.users.toLocaleString()} users</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${plan.revenue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">
                          ${Math.round(plan.revenue / plan.users)}/user
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Prediction Accuracy</span>
                </CardTitle>
                <CardDescription>AI model performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Overall Accuracy</span>
                    <span className="font-semibold">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span>Market Predictions</span>
                    <span className="font-semibold">96.1%</span>
                  </div>
                  <Progress value={96.1} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span>User Behavior</span>
                    <span className="font-semibold">92.8%</span>
                  </div>
                  <Progress value={92.8} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span>Trend Analysis</span>
                    <span className="font-semibold">91.5%</span>
                  </div>
                  <Progress value={91.5} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>System Performance</span>
                </CardTitle>
                <CardDescription>Infrastructure and response metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                      <p className="text-xl font-bold text-green-600">99.9%</p>
                      <p className="text-sm text-gray-500">Uptime</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <p className="text-xl font-bold text-blue-600">145ms</p>
                      <p className="text-sm text-gray-500">Avg Response</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                      <p className="text-xl font-bold text-purple-600">1.2M</p>
                      <p className="text-sm text-gray-500">API Calls/day</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <p className="text-xl font-bold text-orange-600">0.1%</p>
                      <p className="text-sm text-gray-500">Error Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAnalytics;
