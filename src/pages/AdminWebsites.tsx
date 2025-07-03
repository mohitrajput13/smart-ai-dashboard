
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Globe, Eye, MoreVertical } from 'lucide-react';
import { toast } from 'sonner';

interface Website {
  id: string;
  url: string;
  cssClass: string;
  status: 'active' | 'inactive';
  addedDate: string;
  lastChecked: string;
  predictions: number;
}

const AdminWebsites = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: '1',
      url: 'https://example.com',
      cssClass: '.prediction-button',
      status: 'active',
      addedDate: '2024-01-15',
      lastChecked: '2024-01-20',
      predictions: 1247
    },
    {
      id: '2',
      url: 'https://demo.com',
      cssClass: '.predict-btn',
      status: 'inactive',
      addedDate: '2024-01-10',
      lastChecked: '2024-01-18',
      predictions: 89
    },
    {
      id: '3',
      url: 'https://marketplace.io',
      cssClass: '.ai-predictor',
      status: 'active',
      addedDate: '2024-01-12',
      lastChecked: '2024-01-20',
      predictions: 2156
    },
    {
      id: '4',
      url: 'https://trading.com',
      cssClass: '.market-predict',
      status: 'active',
      addedDate: '2024-01-08',
      lastChecked: '2024-01-19',
      predictions: 3421
    }
  ]);

  const [newWebsite, setNewWebsite] = useState({
    url: '',
    cssClass: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWebsite = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newWebsite.url || !newWebsite.cssClass) {
      toast.error('Please fill in all fields');
      return;
    }

    const website: Website = {
      id: Date.now().toString(),
      url: newWebsite.url,
      cssClass: newWebsite.cssClass,
      status: 'active',
      addedDate: new Date().toISOString().split('T')[0],
      lastChecked: new Date().toISOString().split('T')[0],
      predictions: 0
    };

    setWebsites([...websites, website]);
    setNewWebsite({ url: '', cssClass: '' });
    setIsModalOpen(false);
    toast.success('Website added successfully!');
  };

  const handleDeleteWebsite = (id: string) => {
    setWebsites(websites.filter(w => w.id !== id));
    toast.success('Website deleted successfully!');
  };

  const toggleWebsiteStatus = (id: string) => {
    setWebsites(websites.map(w => 
      w.id === id 
        ? { ...w, status: w.status === 'active' ? 'inactive' : 'active' }
        : w
    ));
    toast.success('Website status updated!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Website Management</h2>
          <p className="text-gray-600">Manage websites where the AI Predictor extension works</p>
        </div>
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Website
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Website</DialogTitle>
              <DialogDescription>
                Add a new website where the AI Predictor extension will work
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddWebsite} className="space-y-4">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={newWebsite.url}
                  onChange={(e) => setNewWebsite({ ...newWebsite, url: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cssClass">CSS Class Name</Label>
                <Input
                  id="cssClass"
                  placeholder=".prediction-button"
                  value={newWebsite.cssClass}
                  onChange={(e) => setNewWebsite({ ...newWebsite, cssClass: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  CSS selector where the prediction button will be added
                </p>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-purple-700">Add Website</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Website Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Websites</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{websites.length}</div>
            <p className="text-xs text-muted-foreground">
              {websites.filter(w => w.status === 'active').length} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sites</CardTitle>
            <Globe className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {websites.filter(w => w.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently operational
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Predictions</CardTitle>
            <Badge variant="outline">AI</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {websites.reduce((sum, w) => sum + w.predictions, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all websites
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Predictions</CardTitle>
            <Badge variant="secondary">Per Site</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(websites.reduce((sum, w) => sum + w.predictions, 0) / websites.length).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Per website
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Websites List */}
      <Card>
        <CardHeader>
          <CardTitle>All Websites ({websites.length})</CardTitle>
          <CardDescription>Manage and monitor all integrated websites</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {websites.map((website) => (
              <div key={website.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <h3 className="font-semibold text-lg">{website.url}</h3>
                    <Badge variant={website.status === 'active' ? 'default' : 'secondary'}>
                      {website.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 ml-8">CSS Class: <code className="bg-gray-100 px-2 py-1 rounded">{website.cssClass}</code></p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 ml-8">
                    <span>Added: {website.addedDate}</span>
                    <span>•</span>
                    <span>Last checked: {website.lastChecked}</span>
                    <span>•</span>
                    <span>{website.predictions.toLocaleString()} predictions</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" title="View Details">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    title="Toggle Status"
                    onClick={() => toggleWebsiteStatus(website.id)}
                  >
                    <Badge variant={website.status === 'active' ? 'default' : 'secondary'}>
                      {website.status}
                    </Badge>
                  </Button>
                  <Button variant="ghost" size="sm" title="Edit Website">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    title="Delete Website"
                    onClick={() => handleDeleteWebsite(website.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="More Options">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminWebsites;
