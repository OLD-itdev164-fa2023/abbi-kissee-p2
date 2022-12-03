import * as React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import { Blue } from './themes/Blue'

const Layout = ({ pageTitle, children }) => {
    return(
        <ThemeProvider theme={Blue}>
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
            <h1 className={heading}>Accessibility Resource Website</h1>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/vision" className={navLinkText}>Vision Impared Services</Link></li>
                <li className={navLinkItem}><Link to="/hearing" className={navLinkText}>Hearing Impared Services</Link></li>
            </ul>
            </nav>
            {children}
        </main>
        </ThemeProvider>
    )
}

export default Layout