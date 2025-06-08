import { useEffect,useState } from "react";

function useCurrencyInfo (currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then ((res)=>setData(res.rates))
        console.log('inside',data);
    },[currency])
    console.log('outside',data);
    return data;    
}


export default useCurrencyInfo;