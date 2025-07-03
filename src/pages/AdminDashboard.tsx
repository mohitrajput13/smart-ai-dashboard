
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, TrendingUp, Activity, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Website {
  id: string;
  url: string;
  cssClass: string;
  status: 'active' | 'inactive';
  addedDate: string;
}

const AdminDashboard = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: '1',
      url: 'https://example.com',
      cssClass: '.prediction-button',
      status: 'active',
      addedDate: '2024-01-15'
    },
    {
      id: '2',
      url: 'https://demo.com',
      cssClass: '.predict-btn',
      status: 'inactive',
      addedDate: '2024-01-10'
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
      addedDate: new Date().toISOString().split('T')[0]
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

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', status: 'Active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Free', status: 'Active', joined: '2024-01-20' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', plan: 'Enterprise', status: 'Inactive', joined: '2024-01-10' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Websites</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{websites.filter(w => w.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">
              {websites.length} total websites
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predictions Today</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              +5% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Online</div>
            <p className="text-xs text-muted-foreground">
              99.9% uptime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage registered users and their subscriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">Joined: {user.joined}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={user.plan === 'Enterprise' ? 'default' : user.plan === 'Pro' ? 'secondary' : 'outline'}>
                    {user.plan}
                  </Badge>
                  <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Websites Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Website Management</CardTitle>
              <CardDescription>Add and manage websites where the extension works</CardDescription>
            </div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button>
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
                    <Button type="submit">Add Website</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {websites.map((website) => (
              <div key={website.id} className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">{website.url}</p>
                  <p className="text-sm text-gray-600">CSS Class: {website.cssClass}</p>
                  <p className="text-xs text-gray-500">Added: {website.addedDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={website.status === 'active' ? 'default' : 'secondary'}>
                    {website.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteWebsite(website.id)}
                  >
                    <Trash2 className="h-4 w-4" />
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

export default AdminDashboard;
