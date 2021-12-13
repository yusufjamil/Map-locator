import React from "react";

import {useParams} from 'react-router-dom';

import PlacesList from "../Components/PlacesList";

const DUMMY_PLACES=[
    {
      id:'p1',
      title:'Empire State Building',
      description:'one of the most famous sky scrapers in the world',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address:'20 W 34th St, New York, NY 10001',
      location:
      {
          lat:40.7484405,
          lng:-73.9878584
      },
      creator:'u1'
    },
    
    {
        id:'p2',
        title:'Empire State Building',
        description:'one of the most famous sky scrapers in the world',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:'20 W 34th St, New York, NY 10001',
        location:
        {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:'u2'
      },
      
    
];
const UserPlaces = ()=>
{
    const userId=useParams().userId;
    const loadedPlaces=DUMMY_PLACES.filter(places=>places.creator===userId)
   return <PlacesList items={loadedPlaces}/>;
};

export default UserPlaces;