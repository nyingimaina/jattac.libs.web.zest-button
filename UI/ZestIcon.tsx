import React from 'react';
import { getZestIconElement, BuiltInIconName } from './zestIcons';
import styles from '../Styles/ZestButton.module.css';

export type ZestIconSize = 'sm' | 'md' | 'lg' | number | string;

export interface ZestIconProps {
  name: string;
  size?: ZestIconSize;
  className?: string;
}

const getSizeClass = (size?: ZestIconSize): string => {
  if (size === 'sm') return styles.zestIconSm;
  if (size === 'md') return styles.zestIconMd;
  if (size === 'lg') return styles.zestIconLg;
  return '';
};

export const ZestIcon: React.FC<ZestIconProps> = ({ name, size, className = '' }) => {
  const iconElement = getZestIconElement(name);
  if (!iconElement) {
    return null;
  }

  const sizeClass = getSizeClass(size);
  const style: React.CSSProperties = {};
  if (typeof size === 'number') {
    style.fontSize = `${size}rem`;
  } else if (typeof size === 'string' && size !== 'sm' && size !== 'md' && size !== 'lg') {
    // If it's a string like '1.5rem' or just rem value
    style.fontSize = size;
  }

  return (
    <span className={`${styles.zestIcon} ${sizeClass} ${className}`.trim()} style={style}>
      {iconElement}
    </span>
  );
};

export default ZestIcon;
