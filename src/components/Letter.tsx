import { AppDispatch } from '@/redux/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextSlice, { initializeLetter } from '@/redux/slices/TextSlice';

type LetterComponent = {
  value: string;
  id: number;
}

export default function Letter(props: LetterComponent) {
  const dispatch = useDispatch<AppDispatch>();
  const {currentLetter} = useSelector((state) => state.text)

  useEffect(() => {
    dispatch(initializeLetter({id: props.id, value: props.value}));
  }, [])

  return (
      <code className="letter" id={String(props.id)}>{props.value}</code>
  )
}
