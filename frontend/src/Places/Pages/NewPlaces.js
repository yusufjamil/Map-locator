import React from "react";
import './NewPlaces.css';
import Input from "../../Shared/Components/FormElements/Input";
const NewPlaces = ()=>
{
    return <form className="place-form">
     <Input element="input" type="text" label="Title" validators={[]} errorText="please enter a valid title" />
    </form>
};

export default NewPlaces;