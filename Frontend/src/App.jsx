import { Routes, Route, NavLink, Link, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./Pages/CompleteProfile";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import AppLayOut from "./Ui/AppLayOut";
import OwnerDashboard from "./Pages/OwnerDashboard";
import Projects from "./Pages/Projects";
import SingelProject from "./Pages/SingelProject";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Complete-Profile" element={<CompleteProfile />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Owner" element={<AppLayOut />}>
            <Route index element={<Navigate to="Dashboard" replace="true" />} />
            <Route path="DashBoard" element={<OwnerDashboard />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Projects/:id" element={<SingelProject />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
