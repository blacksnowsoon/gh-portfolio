import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../Pages/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import Project from "../Pages/Project.jsx";


export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PROJECT}
      element={
        <Layout>
          <Project />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
    
  </Routes>
);
