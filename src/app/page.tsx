import Image from 'next/image'
import styles from './page.module.css'
import Word from '@/components/Word'
import Letter from '@/components/Letter'
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import Link from 'next/link';

const text = [
  'ffjj fffj jffj jjff jfjf fjjf'
]

export default function Home() {
  const textArray = text[0].split(" ");
  let wordCount = -1;
  let letterCount = -1;

  return (
    <main className={styles.main}>
      <section style={{display: 'flex', flexWrap: 'wrap'}}>
        <Link href="stages/1">Start</Link>
      </section>
    </main>
  )
}
