
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Chrome, CheckCircle, ExternalLink, Star, Users } from "lucide-react";

const Extensions = () => {
  const extensions = [
    {
      name: "AI Predictor Chrome Extension",
      description: "The official AI Predictor extension for Chrome. Get real-time predictions on any website.",
      version: "2.1.0",
      downloads: "10K+",
      rating: 4.8,
      status: "active",
      features: [
        "Real-time predictions on any website",
        "Instant notification alerts",
        "Seamless integration with dashboard",
        "Offline prediction storage"
      ],
      screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      name: "Polymer Extension",
      description: "Advanced polymer predictions with enhanced accuracy for financial markets.",
      version: "1.5.2",
      downloads: "5K+",
      rating: 4.6,
      status: "beta",
      features: [
        "Advanced polymer analysis",
        "Financial market integration",
        "Real-time chart overlays",
        "Custom prediction algorithms"
      ],
      screenshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      name: "Kabir Marketplace Extension",
      description: "Smart predictions integrated with Kabir.com marketplace for trading insights.",
      version: "3.0.1",
      downloads: "15K+",
      rating: 4.9,
      status: "available",
      features: [
        "Marketplace integration",
        "Trading signal predictions",
        "Portfolio analysis",
        "Risk assessment tools"
      ],
      screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  const installationGuide = [
    {
      step: 1,
      title: "Download Extension",
      description: "Click the download button to get the latest extension file"
    },
    {
      step: 2,
      title: "Open Chrome Extensions",
      description: "Navigate to chrome://extensions/ in your browser"
    },
    {
      step: 3,
      title: "Enable Developer Mode",
      description: "Toggle the Developer mode switch in the top right corner"
    },
    {
      step: 4,
      title: "Install Extension",
      description: "Drag and drop the downloaded file or click 'Load unpacked'"
    },
    {
      step: 5,
      title: "Activate & Configure",
      description: "Click on the extension icon and sign in with your AI Predictor account"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Extensions</h1>
        <p className="text-gray-600 mt-2">
          Enhance your browsing experience with AI-powered prediction extensions
        </p>
      </div>

      {/* Featured Extensions */}
      <div className="space-y-6">
        {extensions.map((extension, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <CardTitle className="text-xl">{extension.name}</CardTitle>
                    <Badge variant={
                      extension.status === "active" ? "default" :
                      extension.status === "beta" ? "secondary" : "outline"
                    }>
                      {extension.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {extension.description}
                  </CardDescription>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {extension.rating}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {extension.downloads} downloads
                    </div>
                    <div>v{extension.version}</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button className="bg-primary hover:bg-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    Install
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {extension.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Screenshots</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {extension.screenshots.map((screenshot, screenshotIndex) => (
                      <div key={screenshotIndex} className="aspect-video bg-gray-100 rounded border">
                        <img 
                          src={screenshot} 
                          alt={`${extension.name} screenshot ${screenshotIndex + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Installation Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Installation Guide</CardTitle>
          <CardDescription>
            Follow these steps to install and configure your extensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {installationGuide.map((guide, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {guide.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{guide.title}</h3>
                  <p className="text-gray-600 mt-1">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Chrome className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Need Help?</h4>
                <p className="text-blue-700 text-sm mt-1">
                  If you encounter any issues during installation, check our{" "}
                  <a href="#" className="underline">troubleshooting guide</a> or{" "}
                  <a href="#" className="underline">contact support</a>.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Compatibility */}
      <Card>
        <CardHeader>
          <CardTitle>Browser Compatibility</CardTitle>
          <CardDescription>
            AI Predictor extensions are compatible with the following browsers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Chrome className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-semibold">Google Chrome</div>
                <div className="text-sm text-gray-600">Version 90+</div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg opacity-50">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <div>
                <div className="font-semibold">Firefox</div>
                <div className="text-sm text-gray-600">Coming Soon</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg opacity-50">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                E
              </div>
              <div>
                <div className="font-semibold">Edge</div>
                <div className="text-sm text-gray-600">Coming Soon</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Extensions;
