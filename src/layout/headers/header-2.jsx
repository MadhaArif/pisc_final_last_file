import Link from 'next/link';
import React, { useState } from 'react';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useSticky from '../../hooks/use-sticky';
import MainMenu from './component/main-menu';
import HeaderTopRight from "./component/header-top-right";

const HeaderTwo = ({ style_3, no_topBar = false }) => {
    const { sticky } = useSticky();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className={`edu-header header-style-${style_3 ? '3' : '2'} ${no_topBar ? 'no-topbar' : ''}`}>
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <HeaderTopRight />
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img className="logo-light" width="100" height="100" src="/assets/images/logo/logo-white.svg" alt="Pact College Logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    <MainMenu />
                                </nav>
                            </div>

                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="header-btn">
                                        <Link href="/contact-us">
                                            <a className="edu-btn btn-primary" style={{ 
                                                 background: '#002147', 
                                                 color: '#fff',
                                                 borderRadius: '5px', 
                                                 padding: '0 30px', 
                                                 height: '55px', 
                                                 lineHeight: '55px',
                                                 fontSize: '16px',
                                                 fontWeight: '700'
                                             }}>
                                                Inquire Us <i className="icon-4" style={{ marginLeft: '10px' }}></i>
                                            </a>
                                        </Link>
                                    </li>


                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)} aria-label="Open Mobile Menu">
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                {isSearchOpen && <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    )
}

export default HeaderTwo;