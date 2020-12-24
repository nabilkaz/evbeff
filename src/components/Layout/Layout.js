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