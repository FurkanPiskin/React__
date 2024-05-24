import React, { useState } from 'react'
import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem';
import { useRef } from 'react';
import { useScrollTrigger } from '@mui/material';
function List() {
  const[slideNumber,setSlideNumber]=useState(0);
  const[isMoved,setIsMoved]=useState(false);
    const listRef=useRef(null);
    const handleClick=(direction)=>{
      setIsMoved(true);
        let distance=listRef.current.getBoundingClientRect().x-50
      if(direction==="left" && listRef.current && slideNumber>0 ){
        setSlideNumber(slideNumber-1);
           listRef.current.style.transform=`translateX(${235+distance}px)`
      }
     else if(direction==="right" && listRef.current && slideNumber<5 ){
        setSlideNumber(slideNumber+1);
        listRef.current.style.transform=`translateX(${-230+distance}px)`
   }

    }
  return (
    <div className='list' >
      <span  className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon onClick={() => handleClick("left")} className='sliderArrow left'
        style={{display:!isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            <ListItem index={10}/>
        </div>
        <ArrowForwardIosOutlinedIcon onClick={() => handleClick("right")}  className='sliderArrow right'
        style={{display:slideNumber===5 && "none"}}/>
      </div>
    </div>
  )
}

export default List