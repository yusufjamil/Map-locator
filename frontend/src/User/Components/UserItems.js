import React from "react";

import './UserItems.js';

import Avatar from "../../Shared/Components/UIElements/Avatar.js";

import {Link} from 'react-router-dom';

import Card from "../../Shared/Components/UIElements/Card";
const UserItems = props=>
{
  return (
      <li className="user-item">
       <Card className="user-item__content">
       <Link to={`/${props.id}/places`}>
       <div className="user-item__image">
       <img src={props.image} alt={props.name}/>
       </div>
       <div className="user-item__info">
        <h2>{props.name}</h2>
        <h2>{props.placeCount} {props.placeCount===1 ? 'Place':'Places'}</h2>
       </div>
       </Link>
       </Card>
      </li>
  )
}

export default UserItems;