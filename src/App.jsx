import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage/HomePage";
import DetailCountryPage from "./pages/DetailCountryPage/DetailCountryPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<RootPage />}>
      <Route path="/" errorElement={<ErrorPage />} element={<HomePage />} />
      <Route
        path="/$id"
        errorElement={<ErrorPage />}
        element={<DetailCountryPage />}
      />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <RootPage />
    </RouterProvider>
  );
}

export default App;
