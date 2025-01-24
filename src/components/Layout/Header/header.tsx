import { Menu } from "../Menu/MenuItems";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="header">
           <Menu className="menu"/>
        </header>
    )
}

export default Header