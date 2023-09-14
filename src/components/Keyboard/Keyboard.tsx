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
        <Key specialClass="backspace" value={'Backspace'} textClass="smallFont" />
      </div>
      <div className='row'>
        <Key specialClass="tab" value={'Tab'} textClass="smallFont" />
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
        <Key specialClass='backslash' value='\' alternative='|'  textClass="smallFont" />
      </div>
      <div className='row'>
        <CapsLock value='Capslock' textClass="smallFont" />
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
        <Key specialClass="enter" value="Enter" textClass="smallFont" />
      </div>
      <div className='row'>
        <Key specialClass="shift" value='Shift' textClass="smallFont" />
        <Key value='Z' />
        <Key value='X' />
        <Key value='C' />
        <Key value='V' />
        <Key value='B' />
        <Key value='N' />
        <Key value='M' />
        <Key value=',' alternative='<' />
        <Key value='.' alternative='>' />
        <Key value='/' alternative='?' />
        <Key specialClass="shift" value="LShift" viewedValue='Shift'textClass="smallFont" />
      </div>
      <div className='row'>
        <Key specialClass="ctrl" value='Control' viewedValue='Ctrl' textClass="smallFont" />
        <Key specialClass="win" value='Win' textClass="smallFont" />
        <Key specialClass="alt" value='Alt' textClass="smallFont" />
        <Key specialClass="space" value=' '  viewedValue='___' />
        <Key specialClass="alt" value='Alt' textClass="smallFont" />
        <Key specialClass="win" value='Win' textClass="smallFont" />
        <Key specialClass="ctrl" value='Control' viewedValue='Ctrl' textClass="smallFont" />
      </div>
    </section>
  )
}
