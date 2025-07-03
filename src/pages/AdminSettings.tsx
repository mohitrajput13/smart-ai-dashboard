
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Shield, 
  Mail, 
  Database, 
  Zap, 
  Globe,
  Bell,
  Key,
  Server,
  Users,
  Save,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { toast } from 'sonner';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    general: {
      siteName: 'AI Predictor',
      siteDescription: 'Intelligent AI for Smart Predictions',
      adminEmail: 'admin@aipredictor.com',
      supportEmail: 'support@aipredictor.com',
      maintenanceMode: false,
      registrationEnabled: true
    },
    security: {
      twoFactorRequired: false,
      sessionTimeout: 24,
      maxLoginAttempts: 5,
      passwordMinLength: 8,
      requireStrongPassword: true,
      enableCaptcha: true
    },
    notifications: {
      emailNotifications: true,
      newUserAlerts: true,
      systemAlerts: true,
      weeklyReports: true,
      errorAlerts: true
    },
    api: {
      rateLimit: 1000,
      enableApiLogging: true,
      apiKeyExpiration: 90,
      maxRequestsPerMinute: 100
    },
    performance: {
      cacheEnabled: true,
      cacheTimeout: 3600,
      compressionEnabled: true,
      maxConcurrentUsers: 10000
    }
  });

  const handleSaveSettings = (category: string) => {
    // Here you would typically save to backend
    toast.success(`${category} settings saved successfully!`);
  };

  const handleResetSettings = (category: string) => {
    toast.success(`${category} settings reset to defaults!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Admin Settings</h2>
        <p className="text-gray-600">Configure system settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>General Settings</span>
              </CardTitle>
              <CardDescription>Basic site configuration and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => setSettings({
                      ...settings,
                      general: { ...settings.general, siteName: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={settings.general.adminEmail}
                    onChange={(e) => setSettings({
                      ...settings,
                      general: { ...settings.general, adminEmail: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.general.siteDescription}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, siteDescription: e.target.value }
                  })}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={settings.general.supportEmail}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, supportEmail: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Temporarily disable site access</p>
                  </div>
                  <Switch
                    checked={settings.general.maintenanceMode}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      general: { ...settings.general, maintenanceMode: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>User Registration</Label>
                    <p className="text-sm text-gray-500">Allow new user registrations</p>
                  </div>
                  <Switch
                    checked={settings.general.registrationEnabled}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      general: { ...settings.general, registrationEnabled: checked }
                    })}
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={() => handleSaveSettings('General')} className="bg-primary hover:bg-purple-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => handleResetSettings('General')}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription>Configure security policies and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => setSettings({
                      ...settings,
                      security: { ...settings.security, sessionTimeout: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                  <Input
                    id="maxLoginAttempts"
                    type="number"
                    value={settings.security.maxLoginAttempts}
                    onChange={(e) => setSettings({
                      ...settings,
                      security: { ...settings.security, maxLoginAttempts: parseInt(e.target.value) }
                    })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
                <Input
                  id="passwordMinLength"
                  type="number"
                  value={settings.security.passwordMinLength}
                  onChange={(e) => setSettings({
                    ...settings,
                    security: { ...settings.security, passwordMinLength: parseInt(e.target.value) }
                  })}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication Required</Label>
                    <p className="text-sm text-gray-500">Require 2FA for all admin accounts</p>
                  </div>
                  <Switch
                    checked={settings.security.twoFactorRequired}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      security: { ...settings.security, twoFactorRequired: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Strong Password Policy</Label>
                    <p className="text-sm text-gray-500">Require complex passwords</p>
                  </div>
                  <Switch
                    checked={settings.security.requireStrongPassword}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      security: { ...settings.security, requireStrongPassword: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable CAPTCHA</Label>
                    <p className="text-sm text-gray-500">Add CAPTCHA to login forms</p>
                  </div>
                  <Switch
                    checked={settings.security.enableCaptcha}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      security: { ...settings.security, enableCaptcha: checked }
                    })}
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={() => handleSaveSettings('Security')} className="bg-primary hover:bg-purple-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => handleResetSettings('Security')}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <span>Notification Settings</span>
              </CardTitle>
              <CardDescription>Configure email and system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500">Enable email notifications</p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, emailNotifications: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>New User Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified of new registrations</p>
                  </div>
                  <Switch
                    checked={settings.notifications.newUserAlerts}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, newUserAlerts: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>System Alerts</Label>
                    <p className="text-sm text-gray-500">Critical system notifications</p>
                  </div>
                  <Switch
                    checked={settings.notifications.systemAlerts}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, systemAlerts: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-gray-500">Receive weekly analytics reports</p>
                  </div>
                  <Switch
                    checked={settings.notifications.weeklyReports}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, weeklyReports: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Error Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified of system errors</p>
                  </div>
                  <Switch
                    checked={settings.notifications.errorAlerts}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, errorAlerts: checked }
                    })}
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={() => handleSaveSettings('Notifications')} className="bg-primary hover:bg-purple-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => handleResetSettings('Notifications')}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-primary" />
                <span>API Settings</span>
              </CardTitle>
              <CardDescription>Configure API access and rate limiting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rateLimit">Daily Rate Limit</Label>
                  <Input
                    id="rateLimit"
                    type="number"
                    value={settings.api.rateLimit}
                    onChange={(e) => setSettings({
                      ...settings,
                      api: { ...settings.api, rateLimit: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="maxRequestsPerMinute">Max Requests/Minute</Label>
                  <Input
                    id="maxRequestsPerMinute"
                    type="number"
                    value={settings.api.maxRequestsPerMinute}
                    onChange={(e) => setSettings({
                      ...settings,
                      api: { ...settings.api, maxRequestsPerMinute: parseInt(e.target.value) }
                    })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="apiKeyExpiration">API Key Expiration (days)</Label>
                <Input
                  id="apiKeyExpiration"
                  type="number"
                  value={settings.api.apiKeyExpiration}
                  onChange={(e) => setSettings({
                    ...settings,
                    api: { ...settings.api, apiKeyExpiration: parseInt(e.target.value) }
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable API Logging</Label>
                  <p className="text-sm text-gray-500">Log all API requests for monitoring</p>
                </div>
                <Switch
                  checked={settings.api.enableApiLogging}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    api: { ...settings.api, enableApiLogging: checked }
                  })}
                />
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">API Security Notice</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Changing API settings may affect existing integrations. Test thoroughly before applying changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={() => handleSaveSettings('API')} className="bg-primary hover:bg-purple-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => handleResetSettings('API')}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-primary" />
                <span>Performance Settings</span>
              </CardTitle>
              <CardDescription>Configure caching and performance optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cacheTimeout">Cache Timeout (seconds)</Label>
                  <Input
                    id="cacheTimeout"
                    type="number"
                    value={settings.performance.cacheTimeout}
                    onChange={(e) => setSettings({
                      ...settings,
                      performance: { ...settings.performance, cacheTimeout: parseInt(e.target.value) }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="maxConcurrentUsers">Max Concurrent Users</Label>
                  <Input
                    id="maxConcurrentUsers"
                    type="number"
                    value={settings.performance.maxConcurrentUsers}
                    onChange={(e) => setSettings({
                      ...settings,
                      performance: { ...settings.performance, maxConcurrentUsers: parseInt(e.target.value) }
                    })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Caching</Label>
                    <p className="text-sm text-gray-500">Cache frequently accessed data</p>
                  </div>
                  <Switch
                    checked={settings.performance.cacheEnabled}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      performance: { ...settings.performance, cacheEnabled: checked }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Compression</Label>
                    <p className="text-sm text-gray-500">Compress responses to reduce bandwidth</p>
                  </div>
                  <Switch
                    checked={settings.performance.compressionEnabled}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      performance: { ...settings.performance, compressionEnabled: checked }
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-green-600">99.9%</p>
                  <p className="text-sm text-gray-500">Current Uptime</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">145ms</p>
                  <p className="text-sm text-gray-500">Avg Response Time</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">8,293</p>
                  <p className="text-sm text-gray-500">Active Sessions</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={() => handleSaveSettings('Performance')} className="bg-primary hover:bg-purple-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => handleResetSettings('Performance')}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
