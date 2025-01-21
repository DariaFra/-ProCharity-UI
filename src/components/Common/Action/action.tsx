import React, { ReactNode } from 'react';
import { ActinTag, ButtonType, ButtonVariant } from './types';
import clsx from 'clsx';
import { Anchor } from '../Anchor/anchor';
import styles from './Action.module.scss'

export type ButtonProps = {
  type?: ButtonType | keyof typeof ButtonType;
  variant?: ButtonVariant | keyof typeof ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  href?: string,
  name?: string,
  Tag?: ActinTag;
}

const withAction = (defaults: ButtonProps) => {
  return function Action(props: ButtonProps) {
    let { className, children, disabled, type, href, variant, Tag, ...rest } = {...defaults, ...props };
    Tag = Tag || 'button';
    const TagElement = (Tag === 'a') ? Anchor : Tag;

    variant = variant || 'primary';

      return (
    <TagElement
      {...rest} 
      type={Tag === 'button' ? type : undefined}
      href = {Tag =='a' ? href : undefined}
      disabled={disabled}
      className = 
      {clsx(styles.button, styles[variant], className, {
      [styles.disabled]: disabled
    })}
    >
        {children} 
  </TagElement>
  )
  }
}

export type LinkProps = {
  href: string;
  children: ReactNode;
}

export const Action = withAction({})

export const Button = withAction({
  Tag: 'button',
  variant: 'primary'
})

export const Link = withAction ({
  Tag: 'a',
  variant: 'link'
})

export const Sumbit = withAction({
  Tag: 'button',
  type: 'submit',
  variant: 'primary'
})