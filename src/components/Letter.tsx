import { AppDispatch } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initializeLetter, letterParams } from '@/redux/slices/TextSlice';

type LetterComponent = {
  value: string;
  id: number;
}

export default function Letter(props: LetterComponent) {
  const [letter, setLetter] = useState<letterParams | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {currentLetter} = useSelector((state) => state.text);
  const {lettersStates} = useSelector((state) => state.text);
  
  // const letterStates = lettersStates[props.id];
  // console.log("lettersState", letterStates)
  
  useEffect(() => {
    setLetter(lettersStates[props.id]);
  }, [lettersStates[props.id]])

  return letter ?
    <code 
    className={`letter ${letter.status === 'correct' ?  'correct' : letter.status === 'wrong' ? 'wrong' : currentLetter === props.id && 'current'}`} id={String(props.id)}
    >
      {props.value}
    </code>
    : <></>
}
