import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import ValidationSchema from "./pages/ValidationSchema";
import ControllerInput from "./pages/Controller";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/dist/rsuite.min.css'
import FormState from "./pages/FormState";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="validation-schema" element={<ValidationSchema />} />
          <Route path="/controller" element={<ControllerInput />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
