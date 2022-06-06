import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    carosel_images: [
      {
        _id: uuid(),
        category: "Lofi",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188313/musing_categories/lofi.png"
      },
      {
        _id: uuid(),
        category: "Coke studio",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188649/musing_categories/cs.png"
      },
      {
        _id: uuid(),
        category: "Evergreen",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188867/musing_categories/evergreen.png"
      },
      {
        _id: uuid(),
        category: "Old is Gold",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654189091/musing_categories/oldies.png"
      }
    ]
  },
  {
    different_genres: [
      {
        _id: uuid(),
        category: "Mix",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654149878/musing_categories/dcc1.jpg",
        description: "My Mix"
      },
      {
        _id: uuid(),
        category: "Lofi",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654175811/musing_categories/dcc11.jpg",
        description: "Chillhop and lofi beats"
      },
      {
        _id: uuid(),
        category: "Evergreen",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654152757/musing_categories/dcc12.jpg",
        description: "Evergreen songs"
      },
      {
        _id: uuid(),
        category: "Global Hits",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654150345/musing_categories/dcc5.jpg",
        description: "Best music internationally"
      },
      {
        _id: uuid(),
        category: "Fresh Releases",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654149824/musing_categories/dcc2.jpg",
        description: "Freshness everywhere"
      },
      {
        _id: uuid(),
        category: "Mood Boosters",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654150136/musing_categories/dcc3.jpg",
        description: "Boost your energy"
      },
      {
        _id: uuid(),
        category: "Recommended",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654175928/musing_categories/dcc15.jpg",
        description: "Recommended music videos"
      },
      {
        _id: uuid(),
        category: "Bollywood love",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151134/musing_categories/dcc4.jpg",
        description: "Love is in the air"
      },
      {
        _id: uuid(),
        category: "Chai & Chill",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151249/musing_categories/dcc6.jpg",
        description: "Slow, acoustic and mild tempo"
      },
      {
        _id: uuid(),
        category: "Indian essentials",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151473/musing_categories/dcc7.jpg",
        description: "Slow, acoustic and mild tempo"
      },
      {
        _id: uuid(),
        category: "Feel-good",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151741/musing_categories/dcc13.jpg",
        description: "Happy music to refresh your day"
      },
      {
        _id: uuid(),
        category: "Hindi hits",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151820/musing_categories/dcc8.jpg",
        description: "Hindi musics"
      },
      {
        _id: uuid(),
        category: "Indian folk hits",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654151946/musing_categories/dcc14.jpg",
        description: "Music is never boxed"
      },
      {
        _id: uuid(),
        category: "Punjabi hits",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654152467/musing_categories/dcc9.jpg",
        description: "Enjoy these songs as you hit the road"
      },
      {
        _id: uuid(),
        category: "Coke studio",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654152575/musing_categories/dcc10.jpg",
        description: "Best of coke studio"
      },
      {
        _id: uuid(),
        category: "Trending",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654258440/musing_categories/dcc17.jpg",
        description: "Take yourself on a musical journey"
      },
      {
        _id: uuid(),
        category: "Old is Gold",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654153029/musing_categories/dcc18.jpg",
        description: "Listen to your favourites"
      },
      {
        _id: uuid(),
        category: "Cardio",
        img: "https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654253463/musing_categories/dcc16.jpg",
        description: "Listen to your favourites"
      },
    ],
  },
  {
    artists: [
      {
        _id: uuid(),
        artist_name: "Arjit Singh",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273071/musing_categories/artist1.jpg",
        description: "Best of arjit singh"
      },
      {
        _id: uuid(),
        artist_name: "Ankit Tiwari",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273145/musing_categories/artist2.jpg",
        description: "Best of ankit tiwari"
      },
      {
        _id: uuid(),
        artist_name: "Dino James",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273208/musing_categories/artist3.jpg",
        description: "Best of dino james"
      },
      {
        _id: uuid(),
        artist_name: "Atif Aslam",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273261/musing_categories/artist4.jpg",
        description: "Best of atif aslam"
      },
      {
        _id: uuid(),
        artist_name: "Jubin Nautiyal",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273303/musing_categories/artist5.jpg",
        description: "Best of jubin nautiyal"
      },
      {
        _id: uuid(),
        artist_name: "K.K.",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273365/musing_categories/artist6.jpg",
        description: "Best of k.k."
      },
      {
        _id: uuid(),
        artist_name: "Lata Mangeshkar",
        img: "https://res.cloudinary.com/nj1508/image/upload/v1654273427/musing_categories/artist7.jpg",
        description: "Best of Lata Mangeshkar"
      }
    ]
  }
];
