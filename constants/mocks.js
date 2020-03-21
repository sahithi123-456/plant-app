const categories=[
    {
       id:'plants',
       name:'Plants',
       tags: ['products','inspiration','shop'],
        count:147,
        image: require('../assets/images/plants.png')

    },

    {
        id:'seeds',
        name:'Seeds',
        tags: ['products','shop'],
         count:16,
         image: require('../assets/images/seeds.png')
 
     },
     {
        id:'flowers',
        name:'Flowers',
        tags: ['products','inspiration'],
         count:68,
         image: require('../assets/images/flowers.png')
 
     },
     {
        id:'sprayers',
        name:'Sprayers',
        tags: ['products','shop'],
         count:17,
         image: require('../assets/images/sprayers.png')
 
     },
     {
        id:'pots',
        name:'Pots',
        tags: ['products','shop'],
         count:47,
         image: require('../assets/images/pots.png')
 
     },

     {
        id:'fertilizers',
        name:'Fertilizers',
        tags: ['products','shop'],
         count:47,
         image: require('../assets/images/fertilizers.png')
 
     },

];

const products=[
{

    id:1,
    name: '16 Best plants that thrive in your Bedroom',
    description:' Bedrooms deserve to be decorated with lush greenery just like every other room in the house-but it can be tricky to find a plant that thrives here.Low light,high humidityand warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior','27 m2','Ideas'],
    images:[
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
//showing only 3 images ,show +3 for the rest

        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),

    ]

}
];

const explore=[
//Images

require('../assets/images/explore_1.png'),
require('../assets/images/explore_2.png'),
require('../assets/images/explore_3.png'),
require('../assets/images/explore_4.png'),
require('../assets/images/explore_5.png'),
require('../assets/images/explore_6.png'),

];

const profile={

    username: 'react-ui-kit',
    location: 'Europe',
    email:  'contact@react-ui-kit.com',
    avatar:require('../assets/images/avatar.png'),
    budget:1000,
    monthly_cap: 2500,
    notification: true,
    newsletter: false,

};

export {
    categories,
    explore,
    products,
    profile,
}