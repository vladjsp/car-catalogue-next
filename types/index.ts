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

export interface IOptionsProps {
  title: string;
  value: string;
}

export interface ICustomFilterProps {
  title: string;
  options: IOptionsProps[];
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
