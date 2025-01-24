import { convertURL } from "@/utils";
import { AnchorHTMLAttributes, useContext } from "react";
import { LinkTag, LinkValue } from "./AnchorProvider";
import { AnchorContext } from "./AnchorContext";

export function useLinkProps(
    href?: LinkValue,
    options?: {preventDefault?: boolean; stopPropagation?: boolean} 
): AnchorHTMLAttributes<HTMLAnchorElement> {
    const {preventDefault = true, stopPropagation = true} = options || {};
    const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};

    if (typeof href === 'string') {
        const url = convertURL(href);
        props.href = href;
        if (url.origin != location.origin) {
            props.rel = 'no opener';
            props.target = '_blank';
        }
    }

    if (typeof href === 'function') {
        props.onClick = (e) => {
            if (preventDefault) e.preventDefault();
            if (stopPropagation) e.stopPropagation();
            href(e);
        }
    }
    return props;
}

export function useAnchorContext() {
    const context = useContext(AnchorContext);
    if (!context) {
        throw new Error('useAnchorContext must be used')
    }

    return context;
}

export function useAnchor(href?: LinkValue): LinkTag {
    const { LinkElement, ignoreFn } = useAnchorContext();
    if (href && LinkElement && typeof href === 'string') {
        if (!ignoreFn || ignoreFn(href)) 
            return LinkElement;
    }
    return 'a';
}