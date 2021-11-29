import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import { HamburgerIcon} from '@chakra-ui/icons';

const HeaderNavBar = (props) => {

    const [mobilemenu, setMobile] = useState(false);
    
    const toggleMenu = (e) => {
        setMobile(!mobilemenu);
    }   
    const handleToggle = (event) => {
        if(event.target===event.currentTarget){
            toggleMenu();
        }
    }
    return (
        <>
        <Fade duration={3000}top>
        <div className="nav navbar navdesktop">
            <Link href="/" passHref>
                <img src="/assets/images/bonafide.svg" className="navlogo" alt="Moneymie Logo"/>
            </Link>
            <div className="align-right navlinks">
                <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer"><i className="fa fa-telegram"></i>Join our Telegram</a>
            </div>
        </div>
        <div className="nav navbar mobilenav">
            <Link href="/" passHref>
            <img src="/assets/images/bonafide.svg" className="navlogo" alt="Moneymie Logo"/>
            </Link>
            <div className="align-right navlinks"> 
                <button className="menubtn" onClick={toggleMenu.bind(this)}>
                {/* <i className="fa fa-bars"></i> */}
                <HamburgerIcon/>
                </button>
            </div>
        </div>
        </Fade> 
        <div className={mobilemenu ? 'navmobile' : 'hidden' } onClick={handleToggle.bind(this)}>
                <div className="navcontents">
                            <header>
                                <img src='assets/images/bonafide.svg' alt="Moneymie Logo"/>
                                <i className="fa fa-times" onClick={toggleMenu.bind(this)}></i>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                                           Join our Telegram
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>
            
        
        </>
    )
}
export default HeaderNavBar;