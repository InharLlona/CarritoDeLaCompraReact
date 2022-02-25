import React from "react";
import { makeStyles } from "@material-ui/styles";
import Flexbox from 'flexbox-react';
import { MyContext, MyChartContext } from "./Contextos";
import { Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

import { dogList } from "./Mock";

export const DogPage: React.FC = () =>{
   
    const mycontext = React.useContext(MyContext)
    const mychartcontext= React.useContext(MyChartContext)
   
    const handleChange = (value:boolean,chid:string,emptc:boolean) => {
        mycontext.objectS.setList(mycontext.chartList(mycontext.objectS.lista,value,chid,emptc))
    }
    const handleChartV = () => {
        mychartcontext.setShow(!mychartcontext.show)
    }

    return (
    <div>
        <Flexbox style={{justifyContent:"space-between", padding:"10px"}}>
            <Link to="/catPage">Cats</Link> 
            <button onClick={handleChartV}>Show Chart</button>
        </Flexbox>
            <Flexbox style={{justifyContent:"space-between",width:"100vw"}}>
                <Flexbox style={{justifyContent:"space-between",width:"100%", padding:"20px"}}>
                    {dogList.map((dog)=>(
                        <div>
                            <div>{dog.id}</div>
                            <div><img  src={dog.picUrl} height="100px" width="100px"  ></img></div>
                            <div>{dog.title}</div>
                            <input type="checkbox" id={`ch${dog.id}`} checked={mycontext.objectS.lista.includes(dog.id)} onChange={e => handleChange(e.target.checked,dog.id,false)}/>
                        </div>    
                    ))} 
                </Flexbox>
                <Flexbox style={{ borderLeft:"1px solid", justifyContent:"space-between", padding:"10px"}}>
                {mychartcontext.show && <div>
                    {mycontext.objectS.lista.map(cat=>(
                        <div>
                            <Flexbox style={{justifyContent:"space-between", padding:"10px"}}>{cat} <DeleteIcon onClick={e => handleChange(false,cat,false)}></DeleteIcon></Flexbox>
                        </div>
                    ))} 
                   <Flexbox style={{flexDirection:"column", padding:"10px", minWidth:"300px" }}>
                    <Link to="/chartPage"style={{backgroundColor:"blue", margin:"5px"}} ><button style={{backgroundColor:"yellow", width:"100%"}}>Process Order</button></Link>
                        <button style={{ margin:"5px"}} onClick={e => handleChange(false,"a",true)}>Empty Chart</button>
                    </Flexbox>
                    </div>}
                </Flexbox>
            </Flexbox>
        </div>
    )

 }