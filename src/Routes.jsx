import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UploadForm = React.lazy(() => import("pages/UploadForm"));
const ModelShowpage = React.lazy(() => import("pages/ModelShowpage"));
const UploadFormOne = React.lazy(() => import("pages/UploadFormOne"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Plarform = React.lazy(() => import("pages/Plarform"));
const PlatformLoggedIn = React.lazy(() => import("pages/PlatformLoggedIn"));
const MyProfilePage = React.lazy(() => import("pages/MyProfilePage"));
const PlatformHomePage = React.lazy(() => import("pages/PlatformHomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PlatformHomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/myprofilepage" element={<MyProfilePage />} />
          <Route path="/platformloggedin" element={<PlatformLoggedIn />} />
          <Route path="/plarform" element={<Plarform />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/uploadformone" element={<UploadFormOne />} />
          <Route path="/modelshowpage" element={<ModelShowpage />} />
          <Route path="/uploadform" element={<UploadForm />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
