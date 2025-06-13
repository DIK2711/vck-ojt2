import React from "react";
import{Link}from "react-router-dom";
import './ContactPage.css'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";



const contactpage=() =>{
    return(
        <div className="page">
            <Header/>
            < div id  ="scroller">
            <h1 className="h">Contact Us
</h1>
            <p className="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.

</p>
            <h2 className="h1">General Enquiries
</h2>
            <h4 className="h4">Vivekanand College Main Campus
</h4>
            <p className="p">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
</p>
            India
Phone: **+91 12345 67890**<br></br>
Email: **info@vivekanandcollege.edu**<br></br>
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br></br>

<h2 className="h1">Admissions Office
</h2>
<p className="p">For all admission-related queries regarding undergraduate or postgraduate programs:
Phone: +91 98765 43210<br></br>
Email: admissions@vivekanandcollege.edu
</p>
<h2 className="h1">Student Support Services
</h2>
<p className="p">For current student support, academic advising, or general assistance:
Phone: +91 87654 32109<br></br>
Email: admissions@vivekanandcollege.edu
</p>
<h2 className="h1">Student Support Services
</h2>
<p className="p">For current student support, academic advising, or general assistance:
    Phone: +91 87654 32109
Email: studentsupport@vivekanandcollege.edu


</p>
<h2 className="h1">Find Us on the Map
</h2>
<p className="p">[You can embed a Google Map here later using an iframe or a React map library.]
</p>
<a href="https://maps.google.com/?q=Vivekanand+College"><u>view on Google Map</u></a>
<h2 className="h1">Send Us a Message
</h2>
<p className="p">[A contact form with fields for Name, Email, Subject, Message can be added here.]

</p>
</div>
<Footer/>
</div>

      
        
    )
}
export default contactpage;
