import React, {
    AnchorHTMLAttributes,
    MouseEvent,
    ReactNode
} from 'react';
import { AnchorContext } from './AnchorContext';

export type LinkValue = | string | ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkTag = 'a' | React.ComponentType<AnchorProps>;


export type AnchorContextType = {
    LinkElement?: React.ComponentType<AnchorProps>
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
