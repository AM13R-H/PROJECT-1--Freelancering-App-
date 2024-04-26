import { Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import Auth from './Pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CompleteProfile from './Pages/CompleteProfile';
import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';
import OwnerDashboard from './Pages/OwnerDashboard';
import Projects from './Pages/Projects';
import SingelProject from './Pages/SingelProject';
import { DarkModeProvider } from './context/DarkModeContext';
import OwnerLayOut from './Features/owner/OwnerLayOut';
import FreelancerDashboard from './Pages/FreelancerDashboard';
import Proposlas from './Pages/Proposals';
import SubmittedProjects from './Pages/SubmittedProjects';
import FreelancerLayOut from './Features/freelancer/FreelancerLayOut';

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/Complete-Profile" element={<CompleteProfile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Owner" element={<OwnerLayOut />}>
              <Route index element={<Navigate to="Dashboard" replace="true" />} />
              <Route path="Dashboard" element={<OwnerDashboard />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Projects/:id" element={<SingelProject />} />
            </Route>
            <Route path="/Freelancer" element={<FreelancerLayOut />}>
              <Route index element={<Navigate to="Dashboard" replace="true" />} />
              <Route path="Dashboard" element={<FreelancerDashboard />} />
              <Route path="Proposals" element={<Proposlas />} />
              <Route path="Projects" element={<SubmittedProjects />} />
            </Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
