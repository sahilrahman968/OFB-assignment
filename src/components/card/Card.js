import React from 'react'
import Tag from '../tag/Tag'
import "./Card.css"
import { Tooltip } from 'antd'
import {CommentOutlined} from "@ant-design/icons";
import { dayDifference } from '../../helper';
import IssueIcon from '../../assets/IssueIcon';


function Card({info}) {
  return (
    <div className='card-container'>
      <div style={{ marginTop: '5px',width:"20px" }}>
        <IssueIcon color='green' />
      </div>
      <div style={{ marginLeft: '1px' }}>
        <div className='title-tags-container'>
          <strong>{info?.title}</strong>

          {info?.labels?.map((label, index) => {
            return <Tag className='tag' key={label?.id} label={label} />
          })}
        </div>
        <div className='sub-title'>
          <span>
            #{info?.number} {info?.created_at? `opened ${dayDifference(info?.created_at)} ago by 
            ${info?.user?.login}`:""}
          </span>
        </div>
      </div>
      <div>
        <Tooltip title={info?.user?.login}>
          <img
            className='avatar-image'
            src={info?.user?.avatar_url}
            alt='avatar'
          />
        </Tooltip>
      </div>
      <div>
        {info?.comments ? (
          <>
            <CommentOutlined />
            {" "}
            {info?.comments}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Card