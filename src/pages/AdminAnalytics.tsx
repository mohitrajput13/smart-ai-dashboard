
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const AdminAnalytics = () => {
  const analyticsStats = [
    {
      title: "Total Predictions",
      value: "47,832",
      change: "+12.5%",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Active Users",
      value: "3,247",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Website Integration",
      value: "89",
      change: "+15.3%",
      trend: "up",
      icon: Globe,
    },
    {
      title: "Revenue",
      value: "$24,180",
      change: "-2.1%",
      trend: "down",
      icon: DollarSign,
    }
  ];

  const websitePerformance = [
    { name: "example.com", predictions: 12847, accuracy: 94.2, status: "excellent" },
    { name: "demo.com", predictions: 8921, accuracy: 91.8, status: "good" },
    { name: "marketplace.io", predictions: 15632, accuracy: 96.1, status: "excellent" },
    { name: "trading.com", predictions: 9876, accuracy: 88.4, status: "good" },
  ];

  const userActivity = [
    { period: "Today", predictions: 2847, users: 1247, conversion: 12.8 },
    { period: "Yesterday", predictions: 2654, users: 1189, conversion: 11.9 },
    { period: "This Week", predictions: 18429, users: 7834, conversion: 13.2 },
    { period: "Last Week", predictions: 17238, users: 7456, conversion: 12.1 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">Comprehensive insights into platform performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-600" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="websites">Websites</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Prediction Accuracy</CardTitle>
                <CardDescription>Overall AI prediction performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Accuracy</span>
                    <span className="text-2xl font-bold text-green-600">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    +2.1% improvement from last month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Platform health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">API Response Time</span>
                    <span className="text-sm font-semibold">120ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Uptime</span>
                    <span className="text-sm font-semibold text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Error Rate</span>
                    <span className="text-sm font-semibold">0.02%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Activity Timeline</CardTitle>
              <CardDescription>Recent user engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">{activity.period}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.predictions.toLocaleString()} predictions by {activity.users.toLocaleString()} users
                      </p>
                    </div>
                    <Badge variant="secondary">{activity.conversion}% conversion</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="websites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Performance</CardTitle>
              <CardDescription>Analytics for integrated websites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {websitePerformance.map((website, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-semibold">{website.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {website.predictions.toLocaleString()} predictions
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-semibold">{website.accuracy}%</p>
                        <p className="text-xs text-muted-foreground">Accuracy</p>
                      </div>
                      <Badge variant={website.status === "excellent" ? "default" : "secondary"}>
                        {website.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+1,247</div>
                <p className="text-sm text-muted-foreground">New users this month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,934</div>
                <p className="text-sm text-muted-foreground">Monthly active users</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Retention Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">84.2%</div>
                <p className="text-sm text-muted-foreground">30-day retention</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$24,180</div>
                <p className="text-sm text-muted-foreground">-2.1% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Average Revenue Per User</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$29.02</div>
                <p className="text-sm text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAnalytics;
