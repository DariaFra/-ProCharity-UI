import { convertURL } from "@/utils";
import { AnchorHTMLAttributes, useContext } from "react";
import { LinkTag, LinkValue } from "./AnchorProvider";
import { AnchorContext } from "./AnchorContext";

export function useLinkProps(
    href?: LinkValue,
): AnchorHTMLAttributes<HTMLAnchorElement> {
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
            e.preventDefault();
            e.stopPropagation();
            href(e)
        }
    }
    return props;
}

export function useAnchor(href?: LinkValue): LinkTag {
    const { LinkElement, ignoreFn } = useContext(AnchorContext);
    if (href && LinkElement && typeof href === 'string') {
        if (!ignoreFn || ignoreFn(href)) 
            return LinkElement;
    }
    return 'a';
}

// export function useAnchor(href?: LinkValue): LinkTag {
//     const context = useContext(AnchorContext);
  
//     if (!context) {
//       throw new Error('useAnchor must be used within an AnchorProvider');
//     }
  
//     const { LinkElement, ignoreFn } = context;
  
//     if (href && LinkElement && typeof href === 'string') {
//       if (!ignoreFn || ignoreFn(href)) return LinkElement;
//     }
  
//     return 'a';
// }