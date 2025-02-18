import React from 'react'
import Sidebar from '../Sidebar'
import Plant from '../plant'

export default function MainPage() {
  return (
    <div style={{
        display:'flex',
        height:'100vh',
        width:"100vw",
      
    }}>
        <Sidebar/>
        <Plant/>
    </div>
  )
}
