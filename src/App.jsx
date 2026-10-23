
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

// Layouts
const VisitorsLayout = lazy(() => import("./app/layout/VisitorsLayout"));
const AdminLayout = lazy(() => import("./app/layout/AdminLayout"));
const UserLayout = lazy(() => import("./app/layout/UserLayout"));
const AuthLayout = lazy(() => import("./app/layout/AuthLayout"));

// General pages
const NotFoundPage = lazy(() => import("./app/pages/NotFoundPage"));
const NotAvailable = lazy(() => import("./app/pages/NotAvailable"));

// Visitor pages
const HomePage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.HomePage,
  }))
);

const AboutPage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.AboutPage,
  }))
);

const ProjectsPage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.ProjectsPage,
  }))
);

const ContactPage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.ContactPage,
  }))
);

const ServicesPage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.ServicesPage,
  }))
);

const ToolsPage = lazy(() =>
  import("./app/pages/VisitorsPage").then((module) => ({
    default: module.ToolsPage,
  }))
);

// Admin pages
const AdminDashboard = lazy(() =>
  import("./app/pages/AdminPage").then((module) => ({
    default: module.AdminDashboard,
  }))
);

// User pages
const UserDashboard = lazy(() =>
  import("./app/pages/UserPage").then((module) => ({
    default: module.UserDashboard,
  }))
);

const MySystems = lazy(() =>
  import("./app/pages/UserPage").then((module) => ({
    default: module.MySystems,
  }))
);

const UserProfile = lazy(() =>
  import("./app/pages/UserPage").then((module) => ({
    default: module.UserProfile,
  }))
);

const UserSettings = lazy(() =>
  import("./app/pages/UserPage").then((module) => ({
    default: module.UserSettings,
  }))
);

const ProjectGuide = lazy(() =>
  import("./app/pages/UserPage").then((module) => ({
    default: module.ProjectGuide,
  }))
);

// Auth pages
const LoginPage = lazy(() =>
  import("./app/pages/AuthPage").then((module) => ({
    default: module.LoginPage,
  }))
);

function PageLoading() {
  return (
    <div className="page-loading">
      Loading page...
    </div>
  );
}

export default function App() {

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<VisitorsLayout />}>
          <Route index element={<Navigate to="/user" replace />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="/visitors" element={<VisitorsLayout />}>
          <Route index element={<Navigate to="home" replace />} />

          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<NotAvailable />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="systems" element={<MySystems />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="project-guide" element={<ProjectGuide />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
