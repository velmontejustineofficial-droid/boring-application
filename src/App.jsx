import { Routes, Route } from "react-router"

import VisitorsLayout from './app/layout/VisitorsLayout';
import AdminLayout from "./app/layout/AdminLayout";

import NotFoundPage from "./app/pages/NotFoundPage";

import { HomePage, AboutPage, ProjectsPage, BlogPage, ContactPage, ServicesPage, ToolsPage } from "./app/pages/VisitorsPage";
import DashbardPage from './dashboard/DashboardPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VisitorsLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path={'/about'} element={<AboutPage/>} />
        <Route path={'/tools'} element={<ToolsPage/>} />
        <Route path={'/projects'} element={<ProjectsPage/>} />
        <Route path={'/blog'} element={<BlogPage/>} />
      </Route>

      <Route path="/admin/:id" element={<AdminLayout />}>
        <Route index element={<DashbardPage />} />
      </Route>

        <Route path={'/contact'} element={<ContactPage/>} />
        <Route path={'/services'} element={<ServicesPage/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
