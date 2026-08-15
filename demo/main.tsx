import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TopPage } from "./pages/TopPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TopPage />
  </StrictMode>
);
