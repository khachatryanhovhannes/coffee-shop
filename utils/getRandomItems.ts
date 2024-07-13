interface IGetRandomItemsProps {
  array: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
  }[];
  count: number;
}

function getRandomItems({ array, count }: IGetRandomItemsProps) {
  let shuffled = array.slice(0); // Copy the array to avoid mutating the original
  let randomItems = [];

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Get the first 'count' items from the shuffled array
  randomItems = shuffled.slice(0, count);

  return randomItems;
}

export default getRandomItems;
