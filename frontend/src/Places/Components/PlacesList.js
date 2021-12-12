import React from "react";

import Card from '../../Shared/Components/UIElements/Card';

import './PlacesList.css';

const PlacesList = ()=>
{
  if(props.items.length===0)
  {
      return <div className="places-list center">
          <Card>
            <h2>No places found</h2>
            <button>Share Place</button>
          </Card>
      </div>
  }
  return <ul className="places-list"></ul>
};

export default PlacesList;