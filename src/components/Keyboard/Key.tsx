import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

export type keyParams = {
  value: string;
  alternative?: string;
  specialClass?: string;
}

export default function Key(props: keyParams) {
  const {currentLetterValue} = useSelector((state: RootState) => state.text);

  return (
    <div className={`key ${props.specialClass && props.specialClass}`}>
      {props.value === currentLetterValue.toUpperCase() ?
        props.value
        : props?.alternative === currentLetterValue.toUpperCase() &&
        props.alternative
      }
    </div>
  )
}
