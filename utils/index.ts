// https://rapidapi.com/apininjas/api/cars-by-api-ninjas example code

import { ICarProps } from '@/types';

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '4884168231msh16ba69a0d20d4c4p12c969jsnb0fb73033ca0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  try {
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      {
        headers: headers,
      }
    );

    const result = await response.json();

    console.log(result);
    return result;
  } catch (error: unknown) {
    console.log(error);
  }
}

//розрахунок вартості оренди автомобіля
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // базова вартість оренди
  const mileageFactor = 0.1; // прайс за кожен проїханий км
  const ageFactor = 0.05; // враховуємо вік автомобіля

  // Розраховуємо вплив коефіцієнтів віку та пробігу
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Фінальний результат
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: ICarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  //console.log(url);

  return `${url}`;
};
