export const getTrueObjectKeys = (object: {
  [key: string]: boolean;
}): string[] => {
  const keys: string[] = Object.keys(object);
  return keys
    .map((key) => object[key] === true && key)
    .filter((val) => val) as string[];
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * max + min);
};

export const getRandomArrayElement = (array: string[]) => {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
};

export const getObjectValueTotal = (object: { [key: string]: number }) => {
  const numbers = Object.keys(object).map((key) => object[key]);
  const total = numbers.reduce(
    (prevVal: number, currentVal: number) => prevVal + currentVal
  );

  return total;
};

export const getKeyValueAtCountIndex = (
  object: { [key: string]: number },
  index: number
) => {
  let count = 0;
  const targetKey = Object.keys(object).map((key) => {
    count += object[key];
    if (count >= index) return key;
  });

  return targetKey;
};
