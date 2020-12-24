import React from "react";
import Nav from "../Nav";
import Helmet from 'react-helmet'
import useSiteMetaData from '../hooks/use-sitemetadata'

export default function Layout({children}) {
    const {title, description} = useSiteMetaData();

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>" />
            </Helmet>
            <div className="max-w-prose mx-auto items-center">
                <Nav />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}