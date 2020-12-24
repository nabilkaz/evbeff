import React from "react";
import Nav from "../Nav";

export default function Layout({children}) {
    return (
        <div className="max-w-prose mx-auto items-center">
            <Nav />
            {children}
        </div>
    )
}