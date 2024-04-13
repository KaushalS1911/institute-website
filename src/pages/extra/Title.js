import React from 'react'

function Title(props) {
  const { className, name } = props
  return (
    <div>
      <h2 className={`fw-bold font-second fs-md-32 fs-sm-24 fs-20 ${className}`}>{name}</h2>
    </div>
  )
}

export default Title
  