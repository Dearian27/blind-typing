'use client'
import Word from '@/components/Word';
import Letter from '@/components/Letter';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import styles from '@/app/page.module.css';
import { AppDispatch } from '@/redux/store';
import { initializeText } from '@/redux/slices/TextSlice';

const text = [
  'ffjj fffj jffj jjff jfjf fjjf'
]

export default function Stage() {
  const dispatch = useDispatch<AppDispatch>();


  const textArray = text[0].split(" ");
  let wordCount = -1;
  let letterCount = -1;


  // const handleKeyPress = (event) => {
  //   // if(event.keyCode === )
  //   console.log('Була натиснута клавіша:', event.key);
  // };
  // useEffect(() => {
  
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, []); // Порожній масив означає, що цей ефект запускається тільки при монтуванні та розмонтованні компонента

  useEffect(() => {
    dispatch(initializeText({text: text[0]}));
  }, []);

  return (
    <main className={styles.main}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {textArray.map((word, index) => {
          wordCount++;
          return <>
            <Word key={wordCount}>
              {word.split('').map(letter => {
                letterCount++;
                return <Letter value={letter} key={letterCount} id={letterCount} />
              })}
            </Word>
            {index !== textArray.length - 1 &&
              <Letter value={' '} key={++letterCount} id={++letterCount} />
            }
          </>
        })}
      </div>
    </main>
  )
}
