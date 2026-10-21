import { Routes, Route, Navigate } from "react-router"

import VisitorsLayout from './app/layout/VisitorsLayout';
import AdminLayout from "./app/layout/AdminLayout";
import UserLayout from "./app/layout/UserLayout";
import AuthLayout from "./app/layout/AuthLayout";

import NotFoundPage from "./app/pages/NotFoundPage";
import NotAvailable from "./app/pages/NotAvailable";

import { HomePage, AboutPage, ProjectsPage, BlogPage, ContactPage, ServicesPage, ToolsPage } from "./app/pages/VisitorsPage";
import { AdminDashboard } from "./app/pages/AdminPage";
import { UserDashboard, MySystems, UserProfile, UserSettings, ProjectGuide }  from "./app/pages/UserPage";
import { LoginPage, CreateAccountPage } from "./app/pages/AuthPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Navigate to="login" replace />}/>

        <Route path="login" element={<LoginPage />} />
        <Route path="create-account" element={<CreateAccountPage />} />
      </Route>
      <Route path="/visitors" element={<VisitorsLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path={'about'} element={<AboutPage/>} />
        <Route path={'tools'} element={<ToolsPage/>} />
        <Route path={'projects'} element={<ProjectsPage/>} />
        <Route path={'blog'} element={<NotAvailable/>} />
      </Route>

      <Route path="/user" element={<UserLayout/>}>
        <Route index element={<Navigate to="dashboard" replace />}/>

        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="systems" element={<MySystems />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<UserSettings />} />

        <Route path="project-guide" element={<ProjectGuide />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>


        <Route path={'/contact'} element={<ContactPage/>} />
        <Route path={'/services'} element={<ServicesPage/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
