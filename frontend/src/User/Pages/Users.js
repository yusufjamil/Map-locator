import React from "react";

import UsersList from "../Components/UsersList";
const Users = ()=>
 {
   const USERS=
   [
     {id:'u1',
   name:'yusuf jamil',
   image:'https://picsum.photos/seed/picsum/200/300'
   ,places:3}
  ];
  return <UsersList items={USERS}/>;
};

export default Users;