import { Anchor } from "@/components/Common/Anchor/anchor"


type MenuProps = {
    className?: string
}

export const Menu: React.FC<MenuProps> = ({}) => {
    return (
        <nav className="menu">
            <Anchor href = "/">home</Anchor>
            <Anchor href = "/login">login</Anchor>
            <Anchor href = "/register">register</Anchor>
        </nav>
    )
}