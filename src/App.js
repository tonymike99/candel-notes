import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import {
  Auth,
  Home,
  PageNotFound,
  Notes,
  Labels,
  Archives,
  Trash,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
