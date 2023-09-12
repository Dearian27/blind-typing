import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initializeLetter, letterParams } from '@/redux/slices/TextSlice';
import './letter.scss';


type LetterComponent = {
  value: string;
  id: number;
}

export default function Letter(props: LetterComponent) {
  const [letter, setLetter] = useState<letterParams | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {currentLetter} = useSelector((state: RootState) => state.text);
  const {lettersStates} = useSelector((state: RootState) => state.text);
  const {cursor} = useSelector((state: RootState) => state.settings);
  
  // const letterStates = lettersStates[props.id];
  // console.log("lettersState", letterStates)
  
  useEffect(() => {
    setLetter(lettersStates[props.id]);
  }, [lettersStates[props.id]])

  return letter ?
    <code 
    className={`letter ${letter.status === 'correct' ?  'correct' : letter.status === 'wrong' && props.value === " " ? 'bgwrong' : letter.status === 'wrong' && 'wrong'}`} id={String(props.id)}
    >
      {props.value}
      {currentLetter === props.id && cursor !== 'none' &&
        <div className={`${cursor === 'default' ? 'cursor1' : 'cursor2'}`} />
      }
    </code>
    : <></>
}
