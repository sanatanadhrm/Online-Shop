import { useOutletContext } from "react-router-dom";
import DB from "../../lib/db.json";
import { useEffect, useState } from "react";
import { Card } from "../../component/card";


export const HomePage = () => {
    const itemName = useOutletContext();
    const [filter, setFilter] = useState<Array<any>>([]);
    const db = DB
    useEffect(()=>{
        if(itemName){
            setFilter(db.filter((item)=>item.category === itemName))
        }else{
            setFilter(db)
        }
    },[itemName,db])
    console.log(filter,itemName)
  return(
    <div>
        <div
        className="flex flex-wrap justify-center items-center gap-[100px] py-[40px] bg-white w-full"
        >
            {filter.map((item:any)=>{
                return(
                    <Card
                    key={Math.random()}
                    data={item}
                    />
                )
            })}
        </div>
    </div>
  )
}