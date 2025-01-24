import { Menu } from "../Menu/MenuItems";

interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer">
            <Menu className="menu"/>
        </footer>
    )
}

export default Footer;