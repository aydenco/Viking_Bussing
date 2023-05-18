// TODO: Do I need this
import { useEffect, useState } from "react";
import { server_calls } from "../api/server";

 export const useGetData = () => {
    const [ cardData, setData ] = useState<[]>([])
    
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { cardData, getData:handleDataFetch }
}
