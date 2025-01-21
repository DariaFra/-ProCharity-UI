import clsx from "clsx";
import { FC } from "react";
import styles from './anchor.module.scss';
import { useAnchor, useLinkProps } from "./hooks";
import { AnchorProps } from "./AnchorProvider";


export const Anchor: FC<AnchorProps> = ({ className, href, children }) => {
    // if (!href) {
    //     throw new Error('href is required');
    // }
    const LinkElement = useAnchor(href);
    const propsLink = useLinkProps(href);
    return (
        <LinkElement {...propsLink} className={clsx(styles.anchor, className)}>
            {children}
        </LinkElement>
    )
}
