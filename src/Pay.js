import './App.css'
import {useParams} from 'react-router-dom'
import Friends from './Friends';
import Account from './Account';
const Pay = (props) => {
    const friends = props.friends;

    return ( 
        <div className="pay">
            <label htmlFor="">
                Search Friends:-
                <br />
                <input type="text" />
            </label>
            <button>🔎</button>
            {
            friends && friends.map(friend=>{
              return(
                 <div className="users" >
                    <h3>{friend}</h3>
                    <button>Pay</button>
                 </div>
              )
           })
           }
             
        </div>
     );
}
 
export default Pay;