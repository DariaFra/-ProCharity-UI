import { ReactNode } from "react"

type CardProps = {
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => (
    <div className="card">
        {children}
    </div>
)
