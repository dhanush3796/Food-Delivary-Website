import { assets } from '../../assets/assets';
import './Footer.css'
function Footer(){

    return(
        <>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla qui inventore fuga ad, mollitia asperiores at. Reprehenderit harum illum esse odit veniam recusandae eligendi ipsum, dolorum saepe, soluta ipsa.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        </div>             
                </div>
                
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivary</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+12-23-433</li>
                        <li>peace@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                <p>&copy; 2025 Peace athma. All rights reserved.</p>

            </p>
        </div>
        </>
    )
}
export default Footer;