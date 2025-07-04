import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Download, Chrome, Settings, Play, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

const Help = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Download Extension',
      description: 'Click the download button to get the AI Predictor Chrome extension',
      icon: <Download className="h-6 w-6" />,
      details: 'The extension file will be downloaded as a .crx file to your computer.'
    },
    {
      number: 2,
      title: 'Open Chrome Extensions',
      description: 'Navigate to chrome://extensions/ in your Chrome browser',
      icon: <Chrome className="h-6 w-6" />,
      details: 'You can also access this through Chrome menu > More tools > Extensions'
    },
    {
      number: 3,
      title: 'Enable Developer Mode',
      description: 'Toggle on "Developer mode" in the top-right corner',
      icon: <Settings className="h-6 w-6" />,
      details: 'This allows you to install extensions from outside the Chrome Web Store'
    },
    {
      number: 4,
      title: 'Install Extension',
      description: 'Drag and drop the downloaded .crx file or click "Load unpacked"',
      icon: <Play className="h-6 w-6" />,
      details: 'The extension will be installed and appear in your extensions list'
    },
    {
      number: 5,
      title: 'Start Using',
      description: 'Click the AI Predictor icon in your browser toolbar to start',
      icon: <CheckCircle className="h-6 w-6" />,
      details: 'You can now make predictions on supported websites'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Predictor</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/help" className="text-gray-600 hover:text-gray-900">Help</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost" 
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-2 mt-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900 py-2">Home</Link>
                <Link to="/help" className="text-gray-600 hover:text-gray-900 py-2">Help</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 py-2">Contact</Link>
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full justify-start">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-primary hover:bg-purple-700 w-full">Get Started</Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Use AI Predictor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Follow our step-by-step guide to install and use the AI Predictor Chrome extension
          </p>
          <Button size="lg" className="bg-primary hover:bg-purple-700">
            <Download className="mr-2 h-5 w-5" />
            Download Chrome Extension
          </Button>
        </div>

        {/* Installation Steps */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Installation Guide
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.number} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <p className="text-gray-600">{step.details}</p>
                    {step.number === 5 && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-green-800 font-medium">
                            Installation Complete!
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use the Extension
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Making Predictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">1</Badge>
                    <span>Navigate to a supported website</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">2</Badge>
                    <span>Click the AI Predictor icon in your toolbar</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">3</Badge>
                    <span>Select the prediction type</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">4</Badge>
                    <span>View AI-generated predictions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-primary" />
                  <span>Extension Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">1</Badge>
                    <span>Right-click the extension icon</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">2</Badge>
                    <span>Select "Options" to configure settings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">3</Badge>
                    <span>Customize prediction preferences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-0.5">4</Badge>
                    <span>Enable notifications for new predictions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary to-purple-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-purple-100 mb-6">
                Download the extension now and start making intelligent predictions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Download className="mr-2 h-5 w-5" />
                  Download Extension
                </Button>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
