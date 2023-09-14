import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

export type keyParams = {
  value: string;
  specialClass?: string;
  textClass?: string;
}

export default function CapsLock(props: keyParams) {
  const {currentLetterValue} = useSelector((state: RootState) => state.text);

  return (
    <div className={`key capslock`}>
      <span className={`text ${props.textClass && props.textClass}`}>
      {/* {props.value === currentLetterValue.toUpperCase() && */}
        Caps lock
      {/* } */}
      </span>
    </div>
  )
}
