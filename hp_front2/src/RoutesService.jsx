import { Route, Routes } from "react-router-dom";
import { Comments } from "./components/Comments.jsx";
import App from "./App.js";

export default function RoutesService() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}
