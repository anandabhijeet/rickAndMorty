import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decPageNummber, incPageNumber } from '../../Redux/Actions/Action';
import "./Pagination.css"
const Pagination = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state)=>state.pageNumber);
   


  return (
    <div className="pagination-container container">
        <div className="pagination">
            <div className="left-angle angle" onClick={()=>{
                
                dispatch(decPageNummber())

            }}>
            <i className="fa fa-angle-left"></i>
            </div>
         <h2>{pageNumber}</h2>
            <div className="right-angle angle" onClick={()=>{
                
                dispatch(incPageNumber())
            }}>
            <i className="fa fa-angle-right"></i>
            </div>
        </div>


    </div>
  )
}

export default Pagination;