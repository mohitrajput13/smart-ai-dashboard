
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Target, BarChart3, Users, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Predictions",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      description: "This month",
      icon: Target
    },
    {
      title: "Accuracy Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      description: "Last 30 days",
      icon: TrendingUp
    },
    {
      title: "Success Rate",
      value: "89.6%",
      change: "-0.3%",
      trend: "down",
      description: "This month",
      icon: BarChart3
    },
    {
      title: "Active Users",
      value: "8,429",
      change: "+15.2%",
      trend: "up",
      description: "Monthly active",
      icon: Users
    }
  ];

  const topPerformingCategories = [
    { name: "Financial Markets", accuracy: 96.8, predictions: 342, color: "bg-green-500" },
    { name: "Cryptocurrency", accuracy: 94.2, predictions: 289, color: "bg-blue-500" },
    { name: "Sports Betting", accuracy: 91.5, predictions: 178, color: "bg-purple-500" },
    { name: "Weather Forecasting", accuracy: 89.3, predictions: 156, color: "bg-orange-500" },
    { name: "Stock Predictions", accuracy: 87.1, predictions: 134, color: "bg-red-500" }
  ];

  const recentActivity = [
    {
      type: "prediction",
      title: "Bitcoin Price Prediction",
      accuracy: "98.5%",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "analysis",
      title: "Market Trend Analysis",
      accuracy: "94.2%",
      time: "4 hours ago",
      status: "completed"
    },
    {
      type: "alert",
      title: "High Volatility Alert",
      accuracy: "N/A",
      time: "6 hours ago",
      status: "triggered"
    },
    {
      type: "prediction",
      title: "Weather Forecast Update",
      accuracy: "91.8%",
      time: "8 hours ago",
      status: "completed"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">
          Track your prediction performance and analyze accuracy trends
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center mt-1">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Performance by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Categories</CardTitle>
            <CardDescription>
              Accuracy rates by prediction category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {category.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold">{category.accuracy}%</span>
                      <Badge variant="outline" className="text-xs">
                        {category.predictions} predictions
                      </Badge>
                    </div>
                  </div>
                  <Progress value={category.accuracy} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest predictions and analyses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === "completed" ? "bg-green-500" :
                    activity.status === "triggered" ? "bg-yellow-500" : "bg-gray-300"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      {activity.accuracy !== "N/A" && (
                        <Badge variant="outline" className="text-xs">
                          {activity.accuracy}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Badge className={`${
                    activity.status === "completed" ? "bg-green-100 text-green-800" :
                    activity.status === "triggered" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Prediction Performance Insights</CardTitle>
              <CardDescription>
                Detailed analysis of your AI prediction accuracy
              </CardDescription>
            </div>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Accuracy Trends</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-semibold text-green-600">↑ 96.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Week</span>
                  <span className="font-semibold">94.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Previous Week</span>
                  <span className="font-semibold">93.2%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Volume Metrics</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Daily Average</span>
                  <span className="font-semibold">42 predictions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Peak Day</span>
                  <span className="font-semibold">89 predictions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total This Month</span>
                  <span className="font-semibold">1,247 predictions</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Smart Insights</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Best performance on weekdays</p>
                <p>• Financial predictions show highest accuracy</p>
                <p>• Morning predictions outperform evening ones</p>
                <p>• Accuracy improves with data volume</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
