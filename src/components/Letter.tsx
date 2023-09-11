import { AppDispatch } from '@/redux/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initializeLetter } from '@/redux/slices/TextSlice';

type LetterComponent = {
  value: string;
  id: number;
}

export default function Letter(props: LetterComponent) {
  const dispatch = useDispatch<AppDispatch>();
  const {currentLetter, initialized} = useSelector((state) => state.text);
  const letterStates = useSelector((state) => state.text.lettersStates);
  
  // const letterStates = lettersStates[props.id];
  // console.log("lettersState", letterStates)
  
  // useEffect(() => {
  //   dispatch(initializeLetter({id: props.id, value: props.value}));
  // }, [])

  return initialized ?
    <code 
    className={`letter ${currentLetter === props.id ? 'current' : letterStates.status === 'correct' ? 'correct' : letterStates.status === 'wrong' && 'wrong'}`} id={String(props.id)}
    >
      {props.value}
    </code>
    : <></>
}
