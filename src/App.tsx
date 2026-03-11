import ProjectDetailsPage from "pages/ProjectDetailsPage";
import Layout from "components/layout/Layout";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "pages/HomePage";
const app = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default app;
