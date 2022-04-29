import React, { useState } from "react";
import { useWeb3Transfer } from "react-moralis";
import './App.css'

const Console = (props) => {
    const [amount,setAmount] = useState(0);
    const Moralis = props.Moralis;
    
    const {fetch, error, isFetching} = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: "0xBA893B629Cd37b9FB67e24794062560eD19f5b22",
        type: "native",
      });
      console.log(error);
    return ( 
        <div className="console">
            hi
            <label htmlFor="">
                Enter Amount:-
                <br />
            </label>
            <input type="text" />
            <br />
            <button onClick={()=>{fetch()}} disabled={isFetching}>Send</button>
            {error && <h3>An error occured</h3>}
        </div>
     );
}
 
export default Console;