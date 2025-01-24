import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.scss'

export type InputProps = {
    className?: string;
    type?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


const withInput = (defaults: InputProps) => {
  return function Input(props: InputProps) {
    const { type, placeholder, className, onChange, ...rest} = {...defaults, ...props};

    return (
      <input type={type} 
      placeholder={placeholder} 
      className={clsx(styles.input, className)}
      {...rest}/>
    )
  }
}

export const InputText = withInput({type: 'text' });
export const InputEmail = withInput({type: 'email' });
export const InputPassword = withInput({type: 'password' })
