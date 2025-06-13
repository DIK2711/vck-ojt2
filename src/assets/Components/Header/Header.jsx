import React,{usestate} from "react"
import {Link} from"react-router-dom";
import './Header.css'
const Header=() =>{
    const [isOpen,setIsOPen]=usestate(false)
    return(
        <header className="j">
            <nav className="navbar">
              <div className="name">Vivekanand College</div>  
              div className={"hamburger ${isOpen ?'active':"}' onclick={() => setIsOPen (!isOpen) }
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                {isOpen &&(
                    <div className="menu">
                        <Link to ="/" className="n">Home</Link>
                        <Link to ="/aboutpage"classname ="n">About</Link>
                        <Link to ="/coursespage"className="n">Courses</Link>
                        <Link to="/contactpage"className="n">Contact</Link>
                        <Link to ="/admissionspage"></Link>
                        <Link to ="/admissionpage"className="button">Apply Now!</Link>
                        </div>
                            
    )       
    }
            <div>
                <Link to="/"className="n">Home</Link>
                <Link to="/aboutpage"className="n">About</Link>
                <Link to="/coursespage" className="n">Courses</Link>
                <Link to ="/contactpage"className="n">Contact</Link>
                <Link to="/admissionspage"></Link>
                <Link to="/admissionpage"className="button">Apply Now!</Link>
        </div>
            </nav>

              </header>

    )
    }
export default Header;