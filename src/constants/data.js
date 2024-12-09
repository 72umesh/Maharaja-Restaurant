import images from "./images";

const drinks = [
    {
        title: 'Mojito',
        price: '195',
        tags: 'Caster Sugar | Lime Wedges | Mint Leaves',
    },
    {
        title: 'WaterMelon Square',
        price: '210',
        tags: 'Watermelon | Basil | Lemonade',
    },
    {
        title: 'Cucumber Cooler',
        price: '250',
        tags: 'Cucumber juice with lemon mint',
    },
    {
        title: 'Fruit Punch',
        price: '195',
        tags: 'Mix Fruit Juices | Strawberry | Rose Vanilla',
    },
    {
        title: 'Berry Blast',
        price: '290',
        tags: 'Triple Berry Squash',
    },

]
const cocktails = [
    {
      title: 'Luscious lips',
      price: '800',
      tags: 'Pomegranate Juice | Fresh Basil| Simple Syrup ',
    },
    {
      title: "Mint to Be",
      price: '550',
      tags: 'Mint Leave | Cucumber Chunks | Topped with Tonic water',
    },
    {
      title: 'Flirtini',
      price: '600',
      tags: 'White Rum | Pineapple juice | Vannila',
    },
    {
      title: 'Marachi',
      price: '1150',
      tags: 'Tequila | Pink salt | Rose Petals',
    },
    {
      title: 'Backstreet Bourbon',
      price: '950',
      tags: 'Bourbon Whiskey | Red Wine',
    },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Family Restsurant ',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',

  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
export default {drinks, cocktails, awards};