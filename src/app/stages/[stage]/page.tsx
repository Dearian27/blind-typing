'use client'
import Word from '@/components/Word';
import Letter from '@/components/Letter';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import styles from '@/app/page.module.css';
import { AppDispatch } from '@/redux/store';
import { backspacePress, initializeText, keyPress } from '@/redux/slices/TextSlice';
import { setCursor } from '@/redux/slices/SettingsSlice';
import Keyboard from '@/components/Keyboard/Keyboard';
import Cursor from '@/components/Cursor';

const text = [
  // 'ffjj fffj jffj jjff jfjf fjjf',
  // 'This is the man\'s world',
  'Learn programming with Click-IT',
]

export default function Stage() {
  const dispatch = useDispatch<AppDispatch>();

  const textArray = text[0].split(" ");
  let wordCount = -1;
  let letterCount = -1;


  const handleKeyPress = (event:KeyboardEvent) => {
    // console.log(event.key)
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

  useEffect(() => {
    dispatch(initializeText({text: text[0]})); // enter a text
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <button onClick={() => dispatch(setCursor('none'))}>None</button>
      <button onClick={() => dispatch(setCursor('default'))}>Default</button>
      <button onClick={() => dispatch(setCursor('terminal'))}>Terminal</button>
      
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
          <Cursor />
        </div>

        <Keyboard />
      </main>
    </>
  )
}
