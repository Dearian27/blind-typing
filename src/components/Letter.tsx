import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { letterParams, setLetterPos } from '@/redux/slices/TextSlice';
import './letter.scss';


type LetterComponent = {
  value: string;
  id: number;
}

export default function Letter(props: LetterComponent) {
  const letterRef = useRef<HTMLElement>(null);

  const [letter, setLetter] = useState<letterParams | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {currentLetter} = useSelector((state: RootState) => state.text);
  const {lettersStates} = useSelector((state: RootState) => state.text);

  useEffect(() => {
    setLetter(lettersStates[props.id]);
  }, [lettersStates[props.id]])
  useEffect(() => {
    if(currentLetter === props.id) {
      const letterPosition = letterRef.current?.getBoundingClientRect(); // Отримати позицію літери
      if(letterPosition) dispatch(setLetterPos({top: letterPosition?.top, left: letterPosition?.left, height: letterPosition?.height, width: letterPosition?.width}))
    }
  }, [currentLetter, letter]);

  return letter ?
    <code 
      ref={letterRef}
      className={`letter ${letter.status === 'correct' ?  'correct' : letter.status === 'wrong' && props.value === " " ? 'bgwrong' : letter.status === 'wrong' ? 'wrong' : currentLetter === props.id && "current"}`} id={String(props.id)}
    >
      {props.value}
    </code>
    : <></>
}
