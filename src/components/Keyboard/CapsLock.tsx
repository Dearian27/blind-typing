import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

export type keyParams = {
  value: string;
  specialClass?: string;
}

export default function CapsLock(props: keyParams) {
  const {currentLetterValue} = useSelector((state: RootState) => state.text);

  return (
    <div className={`key capslock`}>
      {props.value === currentLetterValue.toUpperCase() &&
        props.value
      }
    </div>
  )
}
