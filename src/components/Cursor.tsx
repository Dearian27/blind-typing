import { RootState } from '@/redux/store'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Cursor() {
  const { currentLetter, cursorPos } = useSelector((state: RootState) => state.text);
  const { cursor } = useSelector((state: RootState) => state.settings);

  return (
    <>
      {cursor !== 'none' && cursorPos &&
          <div 
            style={{
              top: cursorPos?.top + cursorPos.height*0.05,
              left: cursorPos?.left,
              position: 'absolute',
              height: cursorPos.height * 0.9, 
              width: cursor === 'default' ? '2px' : cursorPos.width,
            }}
            className={`cursor ${cursor === 'default' ? 'cursor1' : 'cursor2'}`} 
          />
      }
    </>
  )
}
