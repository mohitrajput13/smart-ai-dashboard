import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, TrendingUp, BarChart3, Shield, Zap, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Real-Time Insights",
      description: "Get instant predictions with our advanced AI algorithms"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Predictive Analytics",
      description: "Analyze trends and patterns with powerful data visualization"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Process thousands of predictions in milliseconds"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "10 predictions per month",
        "Basic analytics",
        "Email support",
        "1 browser extension"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional users",
      features: [
        "Unlimited predictions",
        "Advanced analytics",
        "Priority support",
        "5 browser extensions",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom solutions",
        "On-premise deployment",
        "SLA guarantee",
        "Team management"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      rating: 5,
      comment: "AI Predictor has revolutionized how we handle predictive analytics. The accuracy is incredible!"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      rating: 5,
      comment: "The real-time insights have helped us make better decisions faster than ever before."
    },
    {
      name: "Emily Davis",
      role: "CEO",
      company: "FutureTech",
      rating: 5,
      comment: "Outstanding platform with excellent customer support. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Predictor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">Help</Link>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-500" />
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Making prediction markets{" "}
              <span className="text-primary">accessible</span> to everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Intelligent AI for Smart Predictions. Harness the power of advanced machine learning 
              to make accurate predictions and drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-purple-700 px-8 py-3 text-lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/help">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Predictions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make accurate predictions and drive data-driven decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Select the perfect plan for your prediction needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button 
                      className={`w-full ${
                        plan.popular ? 'bg-primary hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-purple-700">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Winning?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of users making smarter predictions with AI Predictor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI Predictor</span>
              </div>
              <p className="text-gray-400">
                Making prediction markets accessible to everyone with intelligent AI.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Extensions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Predictor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
