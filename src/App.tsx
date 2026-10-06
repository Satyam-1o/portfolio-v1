import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import PersonalProjects from "./pages/PersonalProjects";

/** Scroll to the top (or to #anchor) on route change. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/personal-projects"
            element={<PersonalProjects />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
