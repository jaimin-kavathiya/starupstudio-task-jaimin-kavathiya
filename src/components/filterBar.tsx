"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronRight, faChevronLeft, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react'

interface FilterBarProps {
  isFilterOpen: boolean;
  productCount: number;
  setFilterOpen: (flag: boolean) => void;
}

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW ",
  "PRICE: LOW TO HIGH ",
]
function FilterBar(props: FilterBarProps) {

  const [isRecommendOpen, setRecommend] = useState(false);
  const [currentSort, setCurrentSort] = useState(sortOptions[0])
  useEffect(() => {

  }, [isRecommendOpen])
  return (
    <div className='w-full border-y py-3 px-2 text-xs flex justify-around sm:justify-between '>
      <div className='gap-8 hidden sm:flex justify-between'>
        <div>{props.productCount} ITEMS</div>
        {/* change the state */}
        <div className='underline text-gray-400 font-light cursor-pointer' onClick={() => props.setFilterOpen(!props.isFilterOpen)}>
          <FontAwesomeIcon
            icon={props.isFilterOpen ? faChevronLeft : faChevronRight} className='mr-1' />
          {props.isFilterOpen ?'HIDE' : 'SHOW' } FITLER</div>
      </div>
      <p className='w-1/2 block sm:hidden font-bold text-center text-sm py-2' onClick={() => props.setFilterOpen(!props.isFilterOpen)}>FILTERS</p>
      <span className='block sm:hidden border-r'></span>
      <div onClick={() => setRecommend(!isRecommendOpen)} className="w-1/2 flex justify-center sm:justify-end items-center gap-x-2 product-filter cursor-pointer relative">
        <p className='font-bold text-sm'>{currentSort}</p>
        <FontAwesomeIcon
          icon={isRecommendOpen ? faChevronDown : faChevronUp} />
        {isRecommendOpen ? <div className='absolute z-[100] bg-white w-52 top-7 right-5 sm:right-0 flex flex-col items-end gap-y-5  border rounded shadow px-4 py-4 text-sm'>
          {sortOptions.map((option) => <p key={option} onClick={() => setCurrentSort(option)} className={`flex gap-x-2 ${option == currentSort ? "font-bold" : "font-normal"}`}>{option == currentSort ? <FontAwesomeIcon icon={faCheck} /> : ""}{option}</p>)}
        </div> : ""}
      </div>

    </div>
  )
}

export default FilterBar