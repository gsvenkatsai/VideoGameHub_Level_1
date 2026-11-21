import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import LandingPage from "./pages/LandingPage";
import GenresPage from "./pages/GenresPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      {
        element: <Layout />,
        children: [
          { path: "games", element: <HomePage /> },
          { path: "genres", element: <GenresPage /> },
          { path: "game/:id", element: <GameDetailPage /> },
        ],
      },
    ],
  },
]);
export default router;
