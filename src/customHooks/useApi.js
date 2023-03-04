import axios from "axios"
import { useEffect, useState } from "react"

export const useApi = (url,page,per_page) => {
   const [loading , setLoading] = useState(true);
   const [error , setError] = useState(false);
   const [data , setData] = useState([])
   const [hasMore , setHasMore] = useState(false)

   useEffect(() => {
     setLoading(true);
     setError(false);

     let cancel;
     axios({
      method:"GET",
      url,
      params: {
       page,
       per_page
      },
      cancelToken: new axios.CancelToken(c=> cancel = c)
     })
     .then((res)=>{
        setData(prev => [...prev , ...res?.data])
        setHasMore(res?.data?.length > 0)
        setLoading(false);
     })
     .catch((err)=>{
        setLoading(false);
        setError(true)
     })

   }, [page])

   return {loading , error , data , hasMore}
   
}
