import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import { get_cart_courses } from '../redux/features/cart-slice';
import { get_wishlist_products } from '../redux/features/wishlist-slice';

export default function Wrapper({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    useEffect(() => {
        dispatch(get_wishlist_products());
        dispatch(get_cart_courses());
    }, [dispatch]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        const cursorEl = cursorRef.current;
        const dotEl = cursorDotRef.current;
        if (!cursorEl || !dotEl) return;

        let rafId = 0;
        const target = { x: -100, y: -100 };
        const current = { x: -100, y: -100 };

        const setVisible = (isVisible) => {
            const opacity = isVisible ? '1' : '0';
            cursorEl.style.opacity = opacity;
            dotEl.style.opacity = opacity;
        };

        setVisible(false);

        const handleMouseMove = (e) => {
            target.x = e.clientX;
            target.y = e.clientY;
            dotEl.style.transform = `translate3d(${target.x - 4}px, ${target.y - 4}px, 0)`;
            setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        const animate = () => {
            const ease = 0.18;
            current.x += (target.x - current.x) * ease;
            current.y += (target.y - current.y) * ease;
            cursorEl.style.transform = `translate3d(${current.x - 18}px, ${current.y - 18}px, 0)`;
            rafId = window.requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);
        rafId = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            if (rafId) window.cancelAnimationFrame(rafId);
        };
    }, []);

    const handleWhatsAppClick = () => {
            const phoneNumber = '923166474545';
            const whatsappURL = `https://wa.me/${phoneNumber}`;
            window.open(whatsappURL, '_blank');
        };

    return (
        <>
            {loading ? (
                <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ width: '200px', margin: '0 auto' }} src='/assets/images/loader.gif' />
                </div>
            ) : (   
                <>
                    { children }
                        <img
                            onClick={handleWhatsAppClick}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px) scale(1.07)';
                                e.currentTarget.style.filter = 'drop-shadow(0 16px 30px rgba(0,0,0,0.30)) drop-shadow(0 0 18px rgba(37,211,102,0.45)) drop-shadow(0 0 14px rgba(255,184,0,0.22))';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                                e.currentTarget.style.filter = 'drop-shadow(0 12px 22px rgba(0,0,0,0.24)) drop-shadow(0 0 12px rgba(37,211,102,0.30)) drop-shadow(0 0 10px rgba(255,184,0,0.16))';
                            }}
                            style={{
                                zIndex: 100,
                                width: '70px',
                                cursor: 'pointer',
                                position: 'fixed',
                                bottom: '50px',
                                right: '30px',
                                transform: 'translateY(0px) scale(1)',
                                transition: 'transform 180ms ease, filter 180ms ease',
                                filter: 'drop-shadow(0 12px 22px rgba(0,0,0,0.24)) drop-shadow(0 0 12px rgba(37,211,102,0.30)) drop-shadow(0 0 10px rgba(255,184,0,0.16))',
                            }}
                            src="/assets/images/whatsapp.svg"
                            alt="WhatsApp"
                        />
                        <div
                            ref={cursorRef}
                            style={{
                                position: 'fixed',
                                left: 0,
                                top: 0,
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                border: '2px solid rgba(255, 184, 0, 0.65)',
                                background: 'rgba(10, 25, 47, 0.06)',
                                boxShadow: '0 0 24px rgba(255, 184, 0, 0.18)',
                                pointerEvents: 'none',
                                zIndex: 100000,
                                transform: 'translate3d(-100px, -100px, 0)',
                                opacity: 0,
                                transition: 'opacity 180ms ease',
                            }}
                        />
                        <div
                            ref={cursorDotRef}
                            style={{
                                position: 'fixed',
                                left: 0,
                                top: 0,
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#FFB800',
                                boxShadow: '0 0 14px rgba(255, 184, 0, 0.5)',
                                pointerEvents: 'none',
                                zIndex: 100001,
                                transform: 'translate3d(-100px, -100px, 0)',
                                opacity: 0,
                                transition: 'opacity 180ms ease',
                            }}
                        />
                    <ToastContainer />
                </>
            )}
        </>
    )
}
