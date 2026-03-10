import AboutPage from "pages/AboutPage";
import { ContactPage } from "pages/ContactPage";
import HomePage from "pages/HomePage";
import ProjectDetailsPage from "pages/ProjectDetailsPage";
import ProjectsPage from "pages/ProjectsPage";
import Layout from "components/layout/Layout";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const app = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default app;
