
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Chrome, CheckCircle, ArrowUpRight, TrendingUp, Users, Target, Zap } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("extensions");

  const stats = [
    {
      title: "Predictors Used",
      value: "7",
      subtitle: "Free",
      description: "Out of 10 available",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Subscription",
      value: "Free",
      subtitle: "Upgrade for unlimited predictions",
      description: "70% of quota used",
      progress: 70,
      icon: ArrowUpRight,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Extensions",
      value: "1",
      subtitle: "Active browser extensions",
      description: "Chrome extension installed",
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Accuracy",
      value: "94.2%",
      subtitle: "Predict accuracy this month",
      description: "+2.1% from last month",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const extensions = [
    {
      name: "Browser Extensions",
      description: "Download and install browser extensions to use AI predictions on any website.",
      status: "available",
      chromeUrl: "https://chrome.google.com/webstore"
    },
    {
      name: "Polymer Extension",
      description: "Advanced polymer predictions integrated with Kabir.com for enhanced accuracy.",
      status: "beta",
      features: ["Real-time analysis", "Smart predictions", "Auto-sync data"]
    },
    {
      name: "Kabir Extension",
      description: "Smart predictions integrated with Kabir.com marketplace.",
      status: "active",
      features: ["Live market data", "Prediction alerts", "Portfolio tracking"]
    }
  ];

  const installationSteps = [
    "Download the extension file (.crx)",
    "Open Chrome and go to chrome://extensions/",
    "Enable Developer mode in the top right",
    "Drag and drop the .crx file into the browser",
    "Click 'Add Extension' to confirm installation"
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
              <p className="text-sm text-gray-600 mt-1">{stat.subtitle}</p>
              {stat.progress && (
                <div className="mt-3">
                  <Progress value={stat.progress} className="h-2" />
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="extensions">Extensions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="extensions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Browser Extensions</CardTitle>
                  <CardDescription>
                    Enhance your browsing experience with AI-powered predictions
                  </CardDescription>
                </div>
                <Button className="bg-primary hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {extensions.map((extension, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{extension.name}</h3>
                        <Badge variant={
                          extension.status === "active" ? "default" :
                          extension.status === "beta" ? "secondary" : "outline"
                        }>
                          {extension.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{extension.description}</p>
                      {extension.features && (
                        <div className="space-y-1">
                          {extension.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      {extension.chromeUrl ? (
                        <Button variant="outline" size="sm">
                          <Chrome className="w-4 h-4 mr-2" />
                          Download Chrome
                        </Button>
                      ) : extension.status === "active" ? (
                        <Badge className="bg-green-100 text-green-800">Installed</Badge>
                      ) : (
                        <Button variant="outline" size="sm">
                          Install
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Installation Instructions */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Installation Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {installationSteps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Track your prediction performance and accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Smart Predictions</h3>
                  <p className="text-gray-600">Smart predictions integrated with Kabir.com</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Accuracy Rate</span>
                      <span className="font-semibold">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Predictions</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Success Rate</span>
                      <span className="font-semibold">89.6%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Monthly Performance</h3>
                  <div className="bg-gradient-to-r from-primary to-purple-600 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">+12.5%</div>
                    <div className="text-sm opacity-90">Improvement this month</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan: Free</CardTitle>
              <CardDescription>Upgrade to unlock unlimited predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-2 border-dashed border-gray-300">
                    <CardHeader>
                      <CardTitle className="text-lg">Free</CardTitle>
                      <div className="text-2xl font-bold">$0</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 10 predictions/month</li>
                        <li>• Basic analytics</li>
                        <li>• Email support</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4" disabled>
                        Current Plan
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Recommended</Badge>
                      <CardTitle className="text-lg">Pro</CardTitle>
                      <div className="text-2xl font-bold text-primary">$29</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Unlimited predictions</li>
                        <li>• Advanced analytics</li>
                        <li>• Priority support</li>
                        <li>• API access</li>
                      </ul>
                      <Button className="w-full mt-4 bg-primary hover:bg-purple-700">
                        Upgrade Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Enterprise</CardTitle>
                      <div className="text-2xl font-bold">$99</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Everything in Pro</li>
                        <li>• Custom solutions</li>
                        <li>• Dedicated support</li>
                        <li>• SLA guarantee</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4">
                        Contact Sales
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Preferences</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm">Email notifications for prediction alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm">Weekly performance reports</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm">Marketing communications</span>
                    </label>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-purple-700">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
