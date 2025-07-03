
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Eye } from 'lucide-react';

const AdminUsers = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', status: 'Active', joined: '2024-01-15', predictions: 45 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Free', status: 'Active', joined: '2024-01-20', predictions: 8 },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', plan: 'Enterprise', status: 'Inactive', joined: '2024-01-10', predictions: 120 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', plan: 'Pro', status: 'Active', joined: '2024-01-25', predictions: 67 },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', plan: 'Free', status: 'Active', joined: '2024-02-01', predictions: 3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <p className="text-gray-600">View and manage all registered users</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users ({users.length})</CardTitle>
          <CardDescription>Complete list of registered users with their details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Badge variant={
                      user.plan === 'Enterprise' ? 'default' : 
                      user.plan === 'Pro' ? 'secondary' : 'outline'
                    }>
                      {user.plan}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{user.email}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Joined: {user.joined}</span>
                    <span>•</span>
                    <span>{user.predictions} predictions made</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" title="View Details">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="Edit User">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="Delete User">
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

export default AdminUsers;
