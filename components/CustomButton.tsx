'use client';

import Image from 'next/image';

import { ICustomButtonProps } from '../types/index';

//універсальна кнопка стиль, тип, наповнення передається пропсами
const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: ICustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image src={rightIcon} alt='arrow_left' fill className='object-contain' />
      </div>
    )}
  </button>
);

export default Button;
