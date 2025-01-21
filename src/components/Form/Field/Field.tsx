import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './Field.module.scss';

type FieldProps = {
  label?: string;
  className?: string;
  children: ReactNode;
};

export const Field: FC<FieldProps> = ({ label, className, children }) => {
  return (
    <label className={clsx(styles.container, className)}>
      {label && <span className={styles.label}>
        {label}</span>}
      {children}
    </label>
  );
};