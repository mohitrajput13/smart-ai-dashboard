
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Settings, Shield, Database, Mail, Bell } from 'lucide-react';

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
        <p className="text-gray-600">Configure system-wide settings and preferences</p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>General Settings</span>
          </CardTitle>
          <CardDescription>Basic system configuration options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="systemName">System Name</Label>
              <Input id="systemName" defaultValue="AI Predictor" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input id="adminEmail" type="email" defaultValue="admin@aipredictor.com" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable User Registration</Label>
                <p className="text-sm text-gray-600">Allow new users to register accounts</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Maintenance Mode</Label>
                <p className="text-sm text-gray-600">Temporarily disable the system for maintenance</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Settings</span>
          </CardTitle>
          <CardDescription>Authentication and security configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input id="sessionTimeout" type="number" defaultValue="60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
              <Input id="maxLoginAttempts" type="number" defaultValue="5" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Email Verification</Label>
                <p className="text-sm text-gray-600">Users must verify email before accessing the system</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-600">Enable 2FA for admin accounts</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Database Settings</span>
          </CardTitle>
          <CardDescription>Database configuration and maintenance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="backupFrequency">Auto Backup Frequency</Label>
              <select id="backupFrequency" className="w-full h-10 px-3 py-2 border border-input rounded-md">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="retentionPeriod">Data Retention (days)</Label>
              <Input id="retentionPeriod" type="number" defaultValue="365" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="outline">
              <Database className="mr-2 h-4 w-4" />
              Create Backup
            </Button>
            <Button variant="outline">
              <Database className="mr-2 h-4 w-4" />
              Optimize Database
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Email Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>Email Settings</span>
          </CardTitle>
          <CardDescription>SMTP configuration for system emails</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input id="smtpHost" placeholder="smtp.gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input id="smtpPort" type="number" placeholder="587" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpUsername">SMTP Username</Label>
              <Input id="smtpUsername" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPassword">SMTP Password</Label>
              <Input id="smtpPassword" type="password" />
            </div>
          </div>
          
          <Button variant="outline">Test Email Connection</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Notification Settings</span>
          </CardTitle>
          <CardDescription>Configure system notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>New User Notifications</Label>
              <p className="text-sm text-gray-600">Notify admins when new users register</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>System Error Notifications</Label>
              <p className="text-sm text-gray-600">Send alerts for system errors</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily Report Emails</Label>
              <p className="text-sm text-gray-600">Send daily analytics reports to admins</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Separator />
      
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save All Settings</Button>
      </div>
    </div>
  );
};

export default AdminSettings;
