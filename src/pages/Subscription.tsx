
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, Crown, Zap, Shield, Users, ArrowRight, CreditCard, Calendar } from "lucide-react";

const Subscription = () => {
  const currentPlan = {
    name: "Free",
    price: 0,
    usage: {
      predictions: { used: 7, total: 10 },
      extensions: { used: 1, total: 1 },
      support: "Email only"
    }
  };

  const plans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { name: "10 predictions per month", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "1 browser extension", included: true },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
        { name: "Custom integrations", included: false },
        { name: "Advanced analytics", included: false }
      ],
      popular: false,
      current: true
    },
    {
      name: "Pro",
      price: 29,
      period: "month",
      description: "For professional users and teams",
      features: [
        { name: "Unlimited predictions", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
        { name: "5 browser extensions", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Real-time alerts", included: true },
        { name: "Team collaboration", included: true }
      ],
      popular: true,
      current: false
    },
    {
      name: "Enterprise",
      price: 99,
      period: "month",
      description: "For large organizations",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Dedicated support", included: true },
        { name: "Custom solutions", included: true },
        { name: "On-premise deployment", included: true },
        { name: "SLA guarantee", included: true },
        { name: "Team management", included: true },
        { name: "White-label options", included: true },
        { name: "Custom training", included: true }
      ],
      popular: false,
      current: false
    }
  ];

  const billingHistory = [
    {
      date: "Nov 1, 2024",
      description: "Free Plan",
      amount: "$0.00",
      status: "active"
    },
    {
      date: "Oct 1, 2024",
      description: "Free Plan",
      amount: "$0.00",
      status: "completed"
    },
    {
      date: "Sep 1, 2024",
      description: "Free Plan",
      amount: "$0.00",
      status: "completed"
    }
  ];

  const usageData = [
    {
      name: "Predictions Used",
      used: currentPlan.usage.predictions.used,
      total: currentPlan.usage.predictions.total,
      percentage: (currentPlan.usage.predictions.used / currentPlan.usage.predictions.total) * 100
    },
    {
      name: "Extensions Active",
      used: currentPlan.usage.extensions.used,
      total: currentPlan.usage.extensions.total,
      percentage: (currentPlan.usage.extensions.used / currentPlan.usage.extensions.total) * 100
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Subscription</h1>
        <p className="text-gray-600 mt-2">
          Manage your subscription and upgrade to unlock unlimited predictions
        </p>
      </div>

      {/* Current Plan & Usage */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>You're currently on the Free plan</CardDescription>
              </div>
              <Badge className="bg-gray-100 text-gray-800">Free</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Monthly Cost</span>
                  <span className="text-2xl font-bold">$0</span>
                </div>
                <p className="text-sm text-gray-600">No credit card required</p>
              </div>
              
              <div className="space-y-4">
                {usageData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-gray-600">
                        {item.used} / {item.total}
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upgrade Benefits</CardTitle>
            <CardDescription>See what you get with a Pro subscription</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Unlimited Predictions</p>
                  <p className="text-sm text-gray-600">No monthly limits on predictions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Priority Support</p>
                  <p className="text-sm text-gray-600">Get help faster with priority queue</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Advanced Analytics</p>
                  <p className="text-sm text-gray-600">Detailed insights and reporting</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-primary hover:bg-purple-700">
              Upgrade to Pro
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Plan</CardTitle>
          <CardDescription>Select the plan that best fits your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`relative border-2 rounded-lg p-6 ${
                plan.popular ? 'border-primary shadow-lg' : 
                plan.current ? 'border-gray-300 bg-gray-50' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    <Crown className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                {plan.current && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-600">
                    Current Plan
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                    {plan.price > 0 && (
                      <span className="text-gray-600">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.current ? 'bg-gray-400 cursor-not-allowed' :
                    plan.popular ? 'bg-primary hover:bg-purple-700' : 
                    'bg-gray-900 hover:bg-gray-800'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 
                   plan.name === 'Enterprise' ? 'Contact Sales' : 
                   `Upgrade to ${plan.name}`}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Your payment and billing information</CardDescription>
            </div>
            <Button variant="outline">
              <CreditCard className="w-4 h-4 mr-2" />
              Update Payment Method
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingHistory.map((bill, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Calendar className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{bill.description}</p>
                    <p className="text-sm text-gray-600">{bill.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">{bill.amount}</span>
                  <Badge variant={bill.status === "active" ? "default" : "outline"}>
                    {bill.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscription;
