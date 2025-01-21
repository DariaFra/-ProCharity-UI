import { Anchor } from "@/components/Common/Anchor/anchor";

interface FooterProps {
    children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer">
            <nav className="menu">
                <Anchor href = "/">home</Anchor>
                <Anchor href = "/login">login</Anchor>
                <Anchor href = "/register">register</Anchor>
            </nav>
        </footer>
    )
}