import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cursor() {
  const { currentLetter, cursorPos } = useSelector((state: RootState) => state.text);
  const { cursor } = useSelector((state: RootState) => state.settings);

  return (
    <>
      {cursor !== 'none' && cursorPos &&
          <div 
            style={{
              top: cursorPos?.top - 6,
              left: cursorPos?.left + 2.5,
              position: 'absolute',
              transform: 'translate(-100%, -100%)', 
              height: cursorPos.height, 
              width: cursor === 'default' ? '2px' : cursorPos.width,
            }}
            className={`cursor ${cursor === 'default' ? 'cursor1' : 'cursor2'}`} 
          />
      }
    </>
  )
}
