'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ICustomFilterProps } from '../types/index';
import { Listbox, Transition } from '@headlessui/react';
import { updateSearchParams } from '@/utils';

export default function CustomFilter({ title, options }: ICustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  //оновлюю search parameters як робив це з SearchBar
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());

    router.push(newPathName);
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e); // Оновлюємо searchParameters і переходимо на нову сторінку (не зовсім)
        }}>
        <div className='relative w-fit z-10'>
          {/* Кнопка для випадаючого меню */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='шеврон стрілка'
            />
          </Listbox.Button>
          {/* Анімація випадашки */}
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  // ({ active }) => це з headless ui
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
