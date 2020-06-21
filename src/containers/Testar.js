// just use (useEffect). every change will be logged with current value
import React, { useEffect } from "react";

export default function Testar() {
  useEffect(() => {
    window.addEventListener('resize', () => {
      const myWidth  = window.innerWidth;
      console.log('my width :::', myWidth)
   })
  },[window])

  return (
    <div>
      enter code here
   </div>
  )
}