import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { useApi } from '../../customHooks/useApi'
import Card from '../card/Card';
import { LoadingOutlined } from '@ant-design/icons'
import "./Listing.css"
import Header from './header/Header';
import { Empty } from 'antd'


function Listing() {
 const [pageNumber , setPageNumber] = useState(0);
 const { data, loading, hasMore, error } = useApi(
   'https://api.github.com/repos/facebook/react/issues',
   pageNumber,
   20
 )

 const observer = useRef()
 const lastCardRef = useCallback(node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
       if(entries[0].isIntersecting){
          setPageNumber(prev=>prev+1)
       }
    })
    if(node) observer.current.observe(node)
 },[loading,hasMore])

 return (
   <>
     <div className='issues-container'>
       <Header />
       <div className='listing'>
         {data?.map((info, index) => {
           return (
             <div
               key={info?.id}
               ref={index === data?.length - 1 ? lastCardRef : null}
             >
               <Card info={info} />
             </div>
           )
         })}
         {!loading && !data?.length ? <Empty /> : ''}
       </div>
     </div>
     <div className='loader'>{loading ? <LoadingOutlined className ="loading-icon"/> : ''}</div>
   </>
 )
}

export default Listing