import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import sal from 'sal.js';
import { ThemeProvider } from 'next-themes';
if (typeof window !== 'undefined') {
  require( 'bootstrap/dist/js/bootstrap' );
}
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/index.scss';
import { store } from '../redux/store';
import Theme from '../components/common/theme';
import { MouseMoveProvider } from '../contexts/mouse-move-context';
import SEO from '../components/seo';

function MyApp( { Component, pageProps } ) {
    const router = useRouter();
    useEffect( () => {
        sal( { threshold: 0.1, once: true } );
    }, [router.asPath] );

    useEffect( () => {
        sal();
    }, [] );
    return (
        <React.Fragment>
            <SEO />
            <Provider store={ store }>
                <ThemeProvider defaultTheme="light">
                    <MouseMoveProvider>
                        <Component { ...pageProps } />
                    </MouseMoveProvider>
                    <Theme />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}

export default MyApp;
