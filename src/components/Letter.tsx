import React from 'react'

type LetterParams = {
  value: string;
  id: string;
}

export default function Letter(props: LetterParams) {
  return (
    // <pre>
      <code className="letter" id={props.id}>{props.value}</code>
    // </pre>
  )
}
