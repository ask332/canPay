import { useEffect, useState } from "react";
import './App.css'

const Search = (props) => {
   const accounts = props.accounts;
    return ( 
        <div>
           <input type="text" />
           <button>🔎</button>
           {accounts && accounts.map(account=>{
              return(
                 <div className="users" id={account.id}>
                    <h3>{account.user_id}</h3>
                    <h4>{account.addr}</h4>
                    <button>Add User</button>
                 </div>
              )
           })
           }
        </div>
     );
}
 
export default Search;