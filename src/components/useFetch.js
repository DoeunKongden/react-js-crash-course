import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData ] = useState(null);   //We are setting this state argument to be Data because in the fute we want it to fetch Data, not jsut one specific data , liek : any 
                                                //kind of data at all.
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abordConst = new AbortController();  //we can associate this with a fetch  request, and we can use this to stop the fetch

        fetch(url, {signal: abordConst.signal}).then(res => {
          if(!res.ok){
            throw Error("Could not connect to server , please check you connections");
          }
          return res.json();
        }).then((Data)=>{
            setData(Data);
            setPending(false);
            setError(null);
        }).catch(err =>{
          if(err.name === "AbortError"){
            console.log("Fetch aborted");
          }else{
            setError(err.message);
            setPending(false);
          }
        })

        return () => abordConst.abort(); 
      },[url]);

      return {data, isPending, error}

}; //Since this fucntion is using state from the home.js component and we don have all the state here , we jsut gonna paste the state from home,js inside herenpms

export default useFetch;