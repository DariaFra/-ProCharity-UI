export type LogoProps = {
    className?: string;
    size?: 'smal' | 'large'
    onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({className, size, onClick}) => {
   return (
    <div onClick={onClick}>
        
    </div>
   )
}