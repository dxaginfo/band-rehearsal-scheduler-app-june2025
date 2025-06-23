import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './redux/store';
import theme from './theme';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard';

// Band Pages
import Bands from './pages/bands/Bands';
import BandDetail from './pages/bands/BandDetail';
import CreateBand from './pages/bands/CreateBand';
import EditBand from './pages/bands/EditBand';
import BandMembers from './pages/bands/BandMembers';

// Rehearsal Pages
import Rehearsals from './pages/rehearsals/Rehearsals';
import RehearsalDetail from './pages/rehearsals/RehearsalDetail';
import CreateRehearsal from './pages/rehearsals/CreateRehearsal';
import EditRehearsal from './pages/rehearsals/EditRehearsal';

// Setlist Pages
import Setlists from './pages/setlists/Setlists';
import SetlistDetail from './pages/setlists/SetlistDetail';
import CreateSetlist from './pages/setlists/CreateSetlist';
import EditSetlist from './pages/setlists/EditSetlist';

// Profile Pages
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';

// Calendar Page
import Calendar from './pages/calendar/Calendar';

// Not Found Page
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ToastContainer position="top-right" autoClose={5000} />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            
            {/* Protected Routes */}
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Band Routes */}
                <Route path="/bands" element={<Bands />} />
                <Route path="/bands/create" element={<CreateBand />} />
                <Route path="/bands/:id" element={<BandDetail />} />
                <Route path="/bands/:id/edit" element={<EditBand />} />
                <Route path="/bands/:id/members" element={<BandMembers />} />
                
                {/* Rehearsal Routes */}
                <Route path="/bands/:bandId/rehearsals" element={<Rehearsals />} />
                <Route path="/bands/:bandId/rehearsals/create" element={<CreateRehearsal />} />
                <Route path="/rehearsals/:id" element={<RehearsalDetail />} />
                <Route path="/rehearsals/:id/edit" element={<EditRehearsal />} />
                
                {/* Setlist Routes */}
                <Route path="/rehearsals/:rehearsalId/setlists" element={<Setlists />} />
                <Route path="/rehearsals/:rehearsalId/setlists/create" element={<CreateSetlist />} />
                <Route path="/setlists/:id" element={<SetlistDetail />} />
                <Route path="/setlists/:id/edit" element={<EditSetlist />} />
                
                {/* Profile Routes */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                
                {/* Calendar Route */}
                <Route path="/calendar" element={<Calendar />} />
              </Route>
            </Route>
            
            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;