import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaBasketball } from "react-icons/fa6";
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="logo"><p><i class="fa-solid fa-burger"></i>Logoipsum</p></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
            <div className='icon'>
            <FaFacebook className='icons' />
            <FaSquareInstagram className='icons'/>
            <FaTwitter className='icons'/>
            <FaGithub className='icons'/>
            <FaBasketball className='icons'/>
            </div>
        </div>
        </>
    );
}
export default Footer;