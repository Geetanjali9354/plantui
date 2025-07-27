import CART from './images/cart.svg'
import heart from './images/heart.svg'
import search from './images/search.svg'
import watsapp from './images/whatsapp.svg'
import instagram from './images/instagram.svg'
import facebook from './images/facebook.svg'
import messenger from './images/messenger.svg'
import './App.css';
function Sidebar(){
    return(
            //fhsdjfsf
        <div className='sideBar'>
            <div style={{cursor:"pointer" }}>
                <h1 style={{textAlign:"center"}}>Amado</h1>
                <h4 style={{textAlign:"center"}} >F U R N I T U R E</h4>           
                    <h5 style={{marginTop:"50px",marginLeft:"50px"}}>HOME</h5>
                    <br/>
                    <h5 style={{marginLeft:"50px"}}>HELP</h5>
                    <br/>
                    <h5 style={{marginLeft:"50px"}}>PRODUCT</h5>
                    <br/>
                    <h5 style={{marginLeft:"50px"}}>CART</h5>
                    <br/>
                    <h5 style={{marginLeft:"50px"}}>CHECKOUT</h5>
                    <br/>
                    <br/>
                    <button style={{marginLeft:"50px"}}>%Discount%</button>
                    <br/>
                    <br/>
                    <button style={{backgroundColor:"black",marginLeft:"50px"}}>New this week</button>     
                    <div style={{cursor:"pointer"}}>
                        <div style={{marginLeft:"50px",marginTop:"35px",display:"flex"}}>
                            <img src={CART} alt=''></img>
                            <p style={{marginLeft:"10px"}}>CART (0)</p>
                        </div>
                        <br/>
                        <div style={{marginLeft:"50px",display:"flex"}}>
                            <img src={heart} alt=''></img>
                            <p style={{marginLeft:"10px"}}>FAVOURITE</p>
                        </div>
                        <br/>
                        <div style={{marginLeft:"50px",display:"flex"}}>
                            <img src={search} alt=''></img>
                            <p style={{marginLeft:"10px"}}>SEARCH</p>
                        </div>
                    </div>
                    <div className="icons">
                        <img src={watsapp} alt=''></img>
                        <img src={instagram} style={{marginLeft:"20px"}} alt=''></img>
                        <img src={facebook} style={{marginLeft:"20px"}} alt=''></img>
                        <img src={messenger} style={{marginLeft:"20px"}} alt=''></img>
                    </div>     
         </div>            
     </div>     

    )
}
export default Sidebar;