import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Forms/SignIn";
import SignUp from "./pages/Forms/SignUp";
import GetStarted from "./pages/GetStarted";
import ThePlataform from "./pages/ThePlataform";
import Grades from "./pages/InfoSchool/Grades";
import Lessons from "./pages/InfoSchool/Lessons";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RoutesTPS() {
  return (
    <Router>
      <body class="content-page">
        <Header />
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/the-plataform" element={<ThePlataform />} />
          <Route path="/get-started/grades" element={<Grades />} />
          <Route path="/get-started/lessons" element={<Lessons />} />
        </Routes>
        <br />
        <Footer />
      </body>
    </Router>
  );
}
