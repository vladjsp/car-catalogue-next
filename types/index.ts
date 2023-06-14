import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  //!!приклад інтерфейсу для пропсів useState
  setManufacturer: (manufacturer: string) => void;
}

export interface ICustomFilterProps {
  title: string;
  options: any; //!!!
}
