import { useNativeBalance } from "react-moralis";

const Balance = () => {

    function NativeBalance() {
        const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance({ chain : "ropsten" });
      
        return <div>{balance.formatted}</div>;
      }
}
 
export default Balance;