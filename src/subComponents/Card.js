import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <h4>{data.name}</h4>
        <h5>{data.tags[0]}</h5>
    </div>
  )
}

export default Card