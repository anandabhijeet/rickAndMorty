import React from 'react'
import "./Pagination.css"
const Pagination = ({pageCount, setPageCount}) => {
    const incNumber = () => {
        if(pageCount === 42){
            return null;
        }else{
            setPageCount(pageCount + 1);
        }
    }

    const decNumber = () =>{
        if(pageCount === 1){
            return null;
        }else{
            setPageCount(pageCount - 1);
        }
    }


  return (
    <div className="pagination-container container">
        <div className="pagination">
            <div className="left-angle angle" onClick={()=>decNumber()}>
            <i class="fa fa-angle-left"></i>
            </div>
         <h2>{pageCount}</h2>
            <div className="right-angle angle" onClick={()=>incNumber()}>
            <i class="fa fa-angle-right"></i>
            </div>
        </div>


    </div>
  )
}

export default Pagination;