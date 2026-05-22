import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menu_data from '../menu-data';

const MainMenu = () => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(router.pathname);
    }, [router.pathname]);

    return (
        <ul className="mainmenu" style={{ display: 'flex', height: '80px', alignItems: 'center', margin: 0, padding: 0 }}>
            {menu_data.map((menu, i) => (
                <li key={i} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Link href={menu.link}>
                        <a style={{
                            color:
                                currentPath === menu.link
                                    ? '#FFB800'
                                    : '#1A2E39',
                            fontWeight: '700',
                            fontSize: '15px',
                            textDecoration: 'none',
                            padding: '0 20px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            borderTop: currentPath === menu.link ? '4px solid #FFB800' : '4px solid transparent',
                            textTransform: 'capitalize',
                            boxSizing: 'border-box'
                        }}>
                            {menu.title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;