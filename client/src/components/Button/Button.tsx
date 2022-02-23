import React from 'react'
import './Button.css'

interface Props {
  name: string
  className: string
}

const Button : React.FC<Props> = ({name, className}) => {
  return (
    <button className={className}>{name}</button>
  )
}
export {Button}