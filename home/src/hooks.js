import {useState, useEffect } from 'react';


export const useFetch = (url,initialValue) => {
    const [result, setResult] = useState(initialValue);
     useEffect(()=>{
         fetch(url)
         .then(response=>response.json())
         .then(json=>{setResult(json)});
     },[]) 

     //Limit the react to re-render initially
 
 return result;
 }

 export const useDynamicTransition = ({increment,delay,length}) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return (storedIndex + increment) % length;
            })

        }, delay);

        return () => clearInterval(interval);
    }, [delay,increment]);
    
    return index;
 }