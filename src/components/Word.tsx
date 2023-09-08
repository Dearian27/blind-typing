import React from 'react'

type WordParams ={
    children: any,
}

export default function Word(props: WordParams) {
  return (
    <div style={{display: 'flex', flexWrap: 'nowrap'}}>
        {props.children}
    </div>
  )
}
