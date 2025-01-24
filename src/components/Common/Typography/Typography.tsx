import React from 'react';
import { TextTag, TitleTag, TypographyProps, TypographyVariants } from './types';
import styles from './Typography.module.scss'
import clsx from 'clsx';

export const withTypography = (defaults: TypographyProps) => {
  return function Typography(props: TypographyProps) {
    let { className, children, variant, Tag, ...rest} = {
      ...defaults,
      ...props,
    }
    Tag = Tag || 'span';
    variant = variant || TypographyVariants.normal;

    return (
      <Tag 
      {...rest}
      className={clsx(styles.container, className, styles[variant])}>
        {children}
      </Tag>
    )
  }
}

export const Typography: React.FC<TypographyProps> = withTypography({});


export const Text: React.FC<TypographyProps<TextTag>> = withTypography({
  variant: 'normal', 
  Tag: 'span',
})

export const Title: React.FC<TypographyProps<TitleTag>> = withTypography({
  variant: 'title', 
  Tag: 'h2',
})

