import React from "react";
import first from './images/first.jpg'
import second from './images/second.jpg'
import third from './images/third.jpg'
import fourth from './images/fourth.jpg'
import fifth from './images/fifth.jpg'
import sixth from './images/sixth.jpg'
import seventh from './images/seventh.jpg'
import eigth from './images/eigth.jpg'
import nineth from './images/nineth.jpg'
import tenth from './images/tenth.jpg'
import eleven from './images/eleven.jpg'
function Plant(){
   return(
    <div style={{display:"flex",flex:"1"}}>
        <div style={{ display:"flex",flexWrap:"wrap",overflow:'scroll',overflowX:'hidden',width:"100%"}}>
            <div style={{display:"flex", flexDirection:"column",width:"33%"}}>
                <img src={first} style={{height:"300px"}}></img>
                <img src={fourth} style={{height:"250px"}}></img>
                <img src={eigth} style={{height:"250px"}}></img>
                <img src={nineth} style={{height:"150px"}}></img>
            </div>
            <div style={{display:"flex", flexDirection:"column",width:"33%"}}>
                <img src={second} style={{height:"450px"}}></img>
                <img src={tenth} style={{height:"250px"}}></img>
                <img src={fifth} style={{height:"250px"}}></img>
            </div>
            <div style={{display:"flex", flexDirection:"column",width:"34%"}}>
                <img src={third} style={{height:"250px"}}></img>
                <img src={sixth} style={{height:"250px"}}></img>
                <img src={seventh} style={{height:"250px"}}></img>
                <img src={eleven} style={{height:"200px"}}></img>
            </div>
        </div>   
    </div>
   )
}
export default Plant;