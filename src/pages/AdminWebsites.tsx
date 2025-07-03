
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Globe } from 'lucide-react';
import { toast } from 'sonner';

interface Website {
  id: string;
  url: string;
  cssClass: string;
  status: 'active' | 'inactive';
  addedDate: string;
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
      predictions: 234
    },
    {
      id: '2',
      url: 'https://demo.com',
      cssClass: '.predict-btn',
      status: 'inactive',
      addedDate: '2024-01-10',
      predictions: 45
    },
    {
      id: '3',
      url: 'https://test-site.com',
      cssClass: '.ai-predict',
      status: 'active',
      addedDate: '2024-01-20',
      predictions: 567
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
        ? { ...w, status: w.status === 'active' ? 'inactive' as const : 'active' as const }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website) => (
          <Card key={website.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Globe className="h-8 w-8 text-primary" />
                <div className="flex space-x-2">
                  <Badge variant={website.status === 'active' ? 'default' : 'secondary'}>
                    {website.status}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-lg truncate" title={website.url}>
                {website.url}
              </CardTitle>
              <CardDescription>
                CSS Class: {website.cssClass}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Added:</span>
                  <span>{website.addedDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Predictions:</span>
                  <span className="font-semibold">{website.predictions}</span>
                </div>
                <div className="flex justify-between space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => toggleWebsiteStatus(website.id)}
                  >
                    {website.status === 'active' ? 'Deactivate' : 'Activate'}
                  </Button>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" title="Edit Website">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeleteWebsite(website.id)}
                      title="Delete Website"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {websites.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No websites added yet</h3>
            <p className="text-gray-600 mb-4">
              Start by adding your first website where the AI Predictor extension will work
            </p>
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Website
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminWebsites;
