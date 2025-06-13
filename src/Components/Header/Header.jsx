
import {Link} from"react-router-dom";
import './Header.css'

const Header=() =>{
    return(
        <header className="j">
            <nav className="navbar">
              <div className="name">Vivekanand College</div>  
                
            <div>
                <Link to="/" className="n">Home</Link>
                <Link to="/aboutpage"className="n">About</Link>
                <Link to="/coursepage" className="n">Course</Link>
                <Link to ="/contactpage"className="n">Contact</Link>
                <Link to="/admissionpage"></Link>
                <Link to="/admissionpage"className="button">Apply Now!</Link>
        </div>
            </nav>

              </header>
    )

}
    
export default Header;