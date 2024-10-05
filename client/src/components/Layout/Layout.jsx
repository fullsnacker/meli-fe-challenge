import React from 'react';
import { Outlet } from 'react-router-dom';
import QueryInputBox from '../QueryInputBox/QueryInputBox';

function Layout() {
    return (
        <>
            <QueryInputBox />
            <main className="main-results-container">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;