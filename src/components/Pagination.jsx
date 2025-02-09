import React from 'react'

export default function Pagination(props) {
  return (
    <div className=''>
        
        <div className="flex justify-between bg-gray-100/10 rounded-b-xl p-4 border border-gray-200/40">
  <button onClick={()=> props.onPageChange('Previous')} className="join-item border bg-gray-100/10 text-sm border-gray-200/60 rounded-md px-3 py-1">Previous</button>
  <button className="join-item ">Page {props.currentPage} of {props.totalPage}</button>
  <button onClick={()=> props.onPageChange('Next')} className="join-item border bg-gray-100/10 text-sm border-gray-200/60 rounded-md px-3 py-1">Next</button>
</div>
    </div>
  )
}
