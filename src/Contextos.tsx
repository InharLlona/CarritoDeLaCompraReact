import React from 'react'

interface PictureInfo {
    id: string;
}

interface PictureContext {
    objectS:{
        lista:string[],
        setList:React.Dispatch<React.SetStateAction<string[]>>
    },
    chartList : (lista:string[], action:boolean, ix:string, emptyc:boolean) => string[]
}

export const MyContext = React.createContext<PictureContext>(null)
   
export const MyContextProvider:React.FC = (props) => {

        const [lista, setList] = React.useState<string[]>([])
        const retList = {lista,setList}
        const arraycontrols = (listain:string[], action:boolean, ix:string,emptyc:boolean) => {    
            switch(action){
                case true:
                    const f = listain.find(element => element == ix)
                    if(f!=ix)
                    listain = [...listain, ix]
                break;
                case false:
                    if(emptyc == false){
                        listain = listain.filter( element =>  element != ix)}
                    else{
                        listain = []
                    } 
                break;
            }
            setList(listain);
            return listain;
        }
        return(
            <MyContext.Provider value={{objectS:retList, chartList : arraycontrols}}>
                {props.children}
            </MyContext.Provider>
        )
}


interface ChartContext {
    show:boolean,
    setShow:(value:boolean)=>{}
}

export const MyChartContext = React.createContext({
    show : true,
    setShow : (value)=>{},
})

export const MyChartContextProvider:React.FC = (props) => {

    const [show, setShow] = React.useState(true)
    
    return(
        <MyChartContext.Provider value={{show, setShow}}>
            {props.children}
        </MyChartContext.Provider>
    )
}