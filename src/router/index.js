import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { Anime, Home, Login, Register } from "../pages";

export const Router = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      exact
      path="/:animeId"
      element={
        <Layout>
          <Anime />
        </Layout>
      }
    />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route path="*" element={<h1>404</h1>} />
  </Routes>
);
