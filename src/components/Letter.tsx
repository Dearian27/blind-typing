import React from 'react'

type LetterParams = {
    value: string
}

export default function Letter(props: LetterParams) {
  return (
    <pre>{props.value}</pre>
  )
}
