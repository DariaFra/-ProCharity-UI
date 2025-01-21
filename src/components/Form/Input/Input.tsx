import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.scss'

export type InputProps = {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input ({ className, ...props}: InputProps) {
    return <input {...props} className={clsx(styles.container, className)} data-testid='Input'/>
}

export const InputText: React.FC<InputProps> = (props) => (
  <input {...props} type="text" />
);

export const InputEmail: React.FC<InputProps> = (props) => (
  <input {...props} type="email" />
);

export const InputPassword: React.FC<InputProps> = (props) => (
  <input {...props} type="password" />
);