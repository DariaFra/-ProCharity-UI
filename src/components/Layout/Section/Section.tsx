import { FC, ReactNode } from "react"


type SectionProps = {
    children: ReactNode;
    className?: string;
}

const Section: FC<SectionProps> = ({ children }) => (
    <section className="section">
        {children}
    </section>
)

export default Section