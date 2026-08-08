import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

// Phase 1: only the landing page ("/") is being built.
// /dashboard and /day/:id will be added in the next phase.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
