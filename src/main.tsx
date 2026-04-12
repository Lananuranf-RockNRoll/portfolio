import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
    // Hydrate pre-rendered HTML dari react-snap
    hydrateRoot(
        rootElement,
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    // Render biasa (dev mode)
    createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
