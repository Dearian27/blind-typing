import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

export type keyParams = {
  value: string;
  alternative?: string;
  specialClass?: string;
  viewedValue?: string;
  textClass?: string;
}

export default function Key(props: keyParams) {
  const {currentLetterValue} = useSelector((state: RootState) => state.text);

  return (
    <div className={`key ${props.specialClass && props.specialClass} ${props.value === currentLetterValue.toUpperCase() || props?.alternative === currentLetterValue.toUpperCase() ? 'active' : ''}`}>
      <span className={`text ${props.value === currentLetterValue.toUpperCase() || props?.alternative === currentLetterValue.toUpperCase() ? 'active' : ''} ${props.textClass && props.textClass}`}>
        {props?.alternative === currentLetterValue.toUpperCase() ?
          props.alternative
          :
          props.viewedValue || props.value
        }
      </span>
    </div>
  )
}
