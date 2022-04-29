import { useState } from "react";
import { useNativeBalance , MoralisProvider} from "react-moralis";
import Balance from "./Balance";
import { useMoralisWeb3Api } from "react-moralis";
import Pay from "./Pay";


const Home = (props) => {
    const [data, setData] = useState(0);
    
    const Web3Api = useMoralisWeb3Api();
    const fetchNativeBalance = async () => {
        const balance = await Web3Api.account.getNativeBalance();
        
        const Balance = await Web3Api.account.getNativeBalance({chain:'ropsten'});
        setData(Balance.balance /10**18);
      };
      fetchNativeBalance();
    return ( 
        <div className="home">
            <h1>Welcome</h1>
            <h3>{props.addr}</h3>
            <h2>Balance</h2>
            <h3>{`${data} eth`}</h3>
            
        </div>
     );
}
 
export default Home;