import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import { Auth, Landing, PageNotFound } from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
