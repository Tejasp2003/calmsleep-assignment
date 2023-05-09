import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Single from "./components/IndividualPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path=":userId" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
