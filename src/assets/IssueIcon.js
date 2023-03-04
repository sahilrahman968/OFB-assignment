import React from 'react'

function IssueIcon({color}) {
  return (
    <div
      style={{
        borderRadius: '50%',
        border: `1.5px solid ${color}`,
        width: '7.5px',
        height: '7.5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign:"center"
      }}
    >
      <div style={{
       width:"3px",
       height:"3px",
       backgroundColor:`${color}`
      }}></div>
    </div>
  )
}

export default IssueIcon