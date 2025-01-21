import { FunctionComponent } from "react";

export type ActinTag = keyof Pick<React.JSX.IntrinsicElements, 'a' | 'button' | FunctionComponent>

export enum ButtonVariant {
    primary = 'primary',
    outLine = 'outline',
    secondary = 'secondary',
    link = 'link',
}

export enum ButtonType {
    button = 'button',
    submit = 'submit'
}