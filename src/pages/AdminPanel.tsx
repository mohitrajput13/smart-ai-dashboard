
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  UserCheck, 
  UserX, 
  Crown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MoreVertical
} from "lucide-react";

const AdminPanel = () => {
  const adminStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Subscriptions",
      value: "3,247",
      change: "+8.2%",
      icon: Crown,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Monthly Revenue",
      value: "$94,180",
      change: "+15.3%",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "API Requests",
      value: "1.2M",
      change: "+23.1%",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
      plan: "Pro",
      status: "active",
      joinDate: "Nov 15, 2024",
      predictions: 247
    },
    {
      name: "Michael Chen",
      email: "m.chen@innovate.io",
      plan: "Enterprise",
      status: "active", 
      joinDate: "Nov 14, 2024",
      predictions: 892
    },
    {
      name: "Emily Davis",
      email: "emily@futuretech.com",
      plan: "Free",
      status: "pending",
      joinDate: "Nov 13, 2024",
      predictions: 7
    },
    {
      name: "Robert Wilson",
      email: "r.wilson@dataflow.com",
      plan: "Pro",
      status: "suspended",
      joinDate: "Nov 12, 2024",
      predictions: 156
    }
  ];

  const systemHealth = [
    { name: "API Uptime", value: 99.9, status: "excellent" },
    { name: "Database Performance", value: 95.2, status: "good" },
    { name: "Prediction Accuracy", value: 94.2, status: "good" },
    { name: "Response Time", value: 87.5, status: "warning" }
  ];

  const recentActivity = [
    {
      type: "user_signup",
      message: "New user signup: sarah.j@techcorp.com",
      time: "2 minutes ago",
      status: "info"
    },
    {
      type: "subscription",
      message: "Pro subscription activated for m.chen@innovate.io",
      time: "15 minutes ago",
      status: "success"
    },
    {
      type: "alert",
      message: "High API usage detected for user #1247",
      time: "1 hour ago",
      status: "warning"
    },
    {
      type: "system",
      message: "Scheduled maintenance completed successfully",
      time: "2 hours ago",
      status: "success"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 mt-2">
          Monitor platform performance and manage users
        </p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-sm text-green-600 mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>
                    Latest user registrations and status updates
                  </CardDescription>
                </div>
                <Button className="bg-primary hover:bg-purple-700">
                  Export Users
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">Joined {user.joinDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge className={`${
                          user.plan === "Enterprise" ? "bg-purple-100 text-purple-800" :
                          user.plan === "Pro" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {user.plan}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">
                          {user.predictions} predictions
                        </p>
                      </div>
                      
                      <Badge variant={
                        user.status === "active" ? "default" :
                        user.status === "pending" ? "secondary" :
                        "destructive"
                      }>
                        {user.status}
                      </Badge>
                      
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Health Monitoring</CardTitle>
              <CardDescription>
                Real-time system performance and health metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {systemHealth.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {metric.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold">
                          {metric.value}%
                        </span>
                        {metric.status === "excellent" && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        {metric.status === "good" && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                        {metric.status === "warning" && (
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                    </div>
                    <Progress 
                      value={metric.value} 
                      className={`h-2 ${
                        metric.status === "excellent" ? "[&>div]:bg-green-500" :
                        metric.status === "good" ? "[&>div]:bg-blue-500" :
                        "[&>div]:bg-yellow-500"
                      }`}
                    />
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="font-semibold mb-4">Server Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">API Server</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Operational</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Database</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Operational</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">AI Models</span>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>
                Recent system and user activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                    <div className={`p-2 rounded-full ${
                      activity.status === "success" ? "bg-green-100" :
                      activity.status === "warning" ? "bg-yellow-100" :
                      activity.status === "error" ? "bg-red-100" :
                      "bg-blue-100"
                    }`}>
                      {activity.status === "success" && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                      {activity.status === "warning" && (
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      )}
                      {activity.status === "error" && (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      {activity.status === "info" && (
                        <Activity className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>
                Detailed insights into platform usage and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">User Growth</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold">+1,247 users</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Month</span>
                      <span className="font-semibold">+987 users</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Growth Rate</span>
                      <span className="font-semibold text-green-600">+26.3%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Revenue Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">MRR</span>
                      <span className="font-semibold">$94,180</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ARPU</span>
                      <span className="font-semibold">$29.02</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Churn Rate</span>
                      <span className="font-semibold text-red-600">2.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
