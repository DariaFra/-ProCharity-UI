import React, { ReactNode } from 'react';
import { ActinTag, ButtonType, ButtonVariant } from './types';
import clsx from 'clsx';
import styles from './Action.module.scss'

export type ActionProps = {
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

const withAction = (defaults: ActionProps) => {
  return function Action(props: ActionProps) {
    const { className, children, onClick, disabled, type, variant = 'primary', href, Tag = 'button', ...rest } = {...defaults, ...props };

    if(Tag === 'a') {
      return (
        <a href={href} className={clsx(styles.action, className)} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <button
        onClick={onClick}
        className={clsx(styles.action, className)}
        {...rest}>
        {children}
      </button>
    )
  }
}

export const Button = withAction({
  Tag: 'button',
  type: 'button',
  variant: 'primary'
})

export const Link = withAction ({
  Tag: 'a'
})