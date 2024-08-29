import React, { useContext, useEffect, useState } from "react";

export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const  AppContext = React.createContext();



const AppProvider = ({children})=> {
    const[isLoading, setisLoading]=useState(true);
    const[movie, setMovie]=useState([]);
    const[error,setError]=useState({show:"false", msg:""});
    const[query,setQuery]=useState("avengers")

    const getMovies = async (url)=>{
        setisLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.Response==="True"){
                setisLoading(false);
                setError({
                    show:"false",
                    msg:""
                })
                setMovie(data.Search);
            }
            else{
                setError({
                    show:"true",
                    msg:data.Error
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        let timerOut = setTimeout(()=>getMovies(`${API_URL}&s=${query}`),800);
        return ()=> clearTimeout(timerOut);
    },[query])
    return <AppContext.Provider value={{isLoading, movie, error,query,setQuery}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};