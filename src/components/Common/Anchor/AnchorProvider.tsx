import React, {
    AnchorHTMLAttributes,
    FunctionComponent,
    MouseEvent,
    ReactNode
} from 'react';
// import { AnchorProps } from './anchor';
import { AnchorContext } from './AnchorContext';

export type LinkValue = | string | ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

// export type AnchorProps = Omit<
// AnchorHTMLAttributes<HTMLAnchorElement>,
// 'href'
// > & {
//     href?: LinkValue;
// };

export type LinkTag = 'a' | React.FunctionComponent<AnchorProps>;
// | keyof Pick<React.JSX.IntrinsicElements, 'a'>
// | FunctionComponent<AnchorProps>;

export type AnchorContextType = {
    LinkElement?: FunctionComponent<AnchorProps>;
    ignoreFn?: (href: string) => boolean;
}

export type AnchorProviderProps = AnchorContextType & {
    children: ReactNode; 
}

export function AnchorProvider({ children, LinkElement, ignoreFn}: AnchorProviderProps) {
    return (
        <AnchorContext.Provider value ={{ LinkElement, ignoreFn }}>
            {children}
        </AnchorContext.Provider>
    )
}


