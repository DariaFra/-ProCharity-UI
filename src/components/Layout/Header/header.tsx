import { Anchor } from "@/components/Common/Anchor/anchor";

interface HeaderProps {
    chidren?: React.ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="header">
            <nav className="menu">
                <Anchor href = "/">home</Anchor>
                <Anchor href = "/login">login</Anchor>
                <Anchor href = "/register">register</Anchor>
            </nav>
        </header>
    )
}

export default Header