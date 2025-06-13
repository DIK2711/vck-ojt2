import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import AdmissionPage from "./Pages/AdmissionPage";
import CoursePage from "./Pages/CoursePage";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
import NotFoundPage from "./Pages/NotFoundPage";

const App=() =>{
 const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

 
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Diksha Tukaram Powar"
          studentPhotoUrl="/Images/self image.jfif"// Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <div className="main-layout">

        <div className="content">
          <Routes>
            <Route path="/"element={<HomePage/>}/>
            <Route path="/aboutpage" element={<AboutPage/>}/>
            <Route path="/coursepage" element={<CoursePage/>}/>
            <Route path="/contactpage"element={<ContactPage/>}/>
            <Route path="/admissionpage"element={<AdmissionPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  </>
  )
}
export default App;