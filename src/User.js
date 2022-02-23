import React from "react";

const User = props => (
     <div>
         <section>User</section>
         <p>
             <h1>First name:{props.user.firstName}</h1>
         </p>
         <p>
             Last name: {props.user.lastName}
         </p>
         <p>
             E-mail: {props.user.email}
         </p>
     </div>
 )

export default User; 