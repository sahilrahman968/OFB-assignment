import { Tooltip } from 'antd';
import React from 'react'
import "./Tag.css"

function Tag({label}) {
  
 const textColor = (backgroundColor) => {
     console.log(321,backgroundColor);
     if (
       backgroundColor == 'b60205' ||
       backgroundColor == 'd4c5f9' ||
       backgroundColor == '9149d1'
     ) {
       return 'white'
     } else {
       return 'black'
     }
  } 

  const style = {
    backgroundColor: `#${label?.color}`,
    color: textColor(label?.color),
  }

  return (
    <Tooltip title={label?.description}>
      <span className='tag-container' style={style}>
        {label?.name}
      </span>
    </Tooltip>
  )
}

export default Tag