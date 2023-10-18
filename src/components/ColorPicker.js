import './ColorPicker.css';
import {useState} from 'react';

export function ColorPicker(props){
    const [show,setShow]=new useState(true);
    const [color,setColor]=new useState("pink");
    const list=()=>{
        return props.color.map((value)=>{
            return <div style={{backgroundColor:value,width:"29px",height:"29px",margin:"5px"}} onClick={()=>handleColor(value)}> </div>
        })
    }
    const handleColor=(value)=>{
        setColor(value);
        document.getElementById("coldiv").style.backgroundColor=value;
        setShow(false);
    }
    return(
       <div>
        <h1 style={{textAlign:"center"}}>Color Picker</h1>
           <div id="coldiv" style={{backgroundColor:color}}>
               {show && <div id="listdiv">{list()}</div>}
               <button type="button" onClick={()=>setShow(true)}>Pick a color</button>
           </div>
       </div>
    )
}