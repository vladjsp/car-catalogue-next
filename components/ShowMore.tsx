'use client';

import { IShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }: IShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', String(newLimit));

    router.push(newPathName);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Переглянути більше'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
