import Image from 'next/image'
import styles from './page.module.css'
import Word from '@/components/Word'
import Letter from '@/components/Letter'
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const text = [
  'ffjj fffj jffj jjff jfjf fjjf'
]

export default function Home() {
  const textArray = text[0].split(" ");
  let wordCount = -1;
  let letterCount = -1;

  return (
    // <Provider store={store}>
      <main className={styles.main}>
      <section style={{display: 'flex', flexWrap: 'wrap'}}>
        {textArray.map((word, index) => {
          wordCount++;
          return <>
            <Word key={wordCount}>
              {word.split('').map(letter => {
                letterCount++;
                return <Letter value={letter} key={letterCount} />
              })}
            </Word>
            {index !== textArray.length - 1 && 
              <Letter value={' '} key={++letterCount} />
            }
          </>
        })}
        </section>
      </main>
    // </Provider>
  )
}
