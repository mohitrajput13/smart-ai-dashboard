
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Help from "./pages/Help";

// User Dashboard
import { UserDashboardLayout } from "./components/UserDashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import Extensions from "./pages/Extensions";
import Analytics from "./pages/Analytics";
import Subscription from "./pages/Subscription";
import Settings from "./pages/Settings";

// Admin Dashboard
import { AdminDashboardLayout } from "./components/AdminDashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminWebsites from "./pages/AdminWebsites";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminSettings from "./pages/AdminSettings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/help" element={<Help />} />
            
            {/* Admin Login */}
            <Route path="/admin/login" element={<Login />} />

            {/* Protected User Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <UserDashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<UserDashboard />} />
              <Route path="extensions" element={<Extensions />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Protected Admin Dashboard Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute adminOnly>
                <AdminDashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="websites" element={<AdminWebsites />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>

            {/* Redirect /admin to /admin/login */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
