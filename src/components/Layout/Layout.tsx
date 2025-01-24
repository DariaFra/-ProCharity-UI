import React from "react";
import Header from "./Header/header";
import Footer  from "./Footer/footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header/>
            {children} 
            <Footer/>
        </div>
    )
}



