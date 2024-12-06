import { ReactNode } from 'react';

export interface IButtonCategory {
  icon: ReactNode;
  title: string;
  active?: boolean;
  onClick?: () => void
}