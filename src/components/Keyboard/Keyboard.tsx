import { RootState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Key from './Key'
import './keyboard.scss';
import CapsLock from './CapsLock';

export default function Keyboard() {

  return (
    <section className='keyboard'>
      <div className='row'>
        <Key value='`' />
        <Key value='1' />
        <Key value='2' />
        <Key value='3' />
        <Key value='4' />
        <Key value='5' />
        <Key value='6' />
        <Key value='7' />
        <Key value='8' />
        <Key value='9' />
        <Key value='0' />
        <Key value='-' />
        <Key value='=' />
        <Key specialClass="backspace" value={'Backspace'} />
      </div>
      <div className='row'>
        <Key specialClass="tab" value={'Tab'} />
        <Key value='Q' />
        <Key value='W' />
        <Key value='E' />
        <Key value='R' />
        <Key value='T' />
        <Key value='Y' />
        <Key value='U' />
        <Key value='I' />
        <Key value='O' />
        <Key value='P' />
        <Key value='[' alternative='{' />
        <Key value=']' alternative='}' />
        <Key specialClass='backslash' value='\' alternative='|' />
      </div>
      <div className='row'>
        <CapsLock value='Capslock' />
        <Key value='A' />
        <Key value='S' />
        <Key value='D' />
        <Key value='F' />
        <Key value='G' />
        <Key value='H' />
        <Key value='J' />
        <Key value='K' />
        <Key value='L' />
        <Key value=';' alternative=':' />
        <Key value="'" alternative='"' />
        <Key specialClass="enter" value="Enter" />
      </div>
      <div className='row'>
      
      </div>
      <div className='row'>
      
      </div>
    </section>
  )
}
