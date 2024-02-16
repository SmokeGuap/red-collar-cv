import { ReactNode } from 'react';

export interface ICompetenceProps {
  title: string;
  list?: TItem[];
  skills?: ReactNode[];
}

type TItem = {
  name: string;
  subName: string;
  years: string;
};
