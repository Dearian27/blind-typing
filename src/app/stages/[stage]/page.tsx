'use client'
import Word from '@/components/Word';
import Letter from '@/components/Letter';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import './styles.scss';
import { AppDispatch } from '@/redux/store';
import { backspacePress, initializeText, keyPress } from '@/redux/slices/TextSlice';

const text = [
  // 'ffjj fffj jffj jjff jfjf fjjf',
  'This is the men\'s world',
]

export default function Stage() {
  const dispatch = useDispatch<AppDispatch>();

  const textArray = text[0].split(" ");
  let wordCount = -1;
  let letterCount = -1;


  const handleKeyPress = (event:KeyboardEvent) => {
    if (event.keyCode === 32) {
      event.preventDefault();
    } 
    switch(event.keyCode) {
      case 9:
      case 16:
      case 17:
      case 18:
      case 20:
      case 91: event.preventDefault(); break;
      case 8: dispatch(backspacePress()); break;
      default: dispatch(keyPress(event.key));break;
    }
  };
  // useEffect(() => {
  
  // }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Порожній масив означає, що цей ефект запускається тільки при монтуванні та розмонтованні компонента

  useEffect(() => {
    dispatch(initializeText({text: text[0]}));
  }, []);

  return (
    <main className={styles.main}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {textArray.map((word, index) => {
          wordCount++;
          return <>
            <Word key={`w${wordCount}`}>
              {word.split('').map(letter => {
                letterCount++;
                return <Letter value={letter} key={`l${letterCount}`} id={letterCount} />
              })}
            </Word>
            {index !== textArray.length - 1 &&
              <Letter value={' '} key={`ls${letterCount+1}`} id={++letterCount} />
            }
          </>
        })}
      </div>
    </main>
  )
}
