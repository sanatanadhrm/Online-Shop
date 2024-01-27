import { useEffect, useState } from "react"
import { Navbar } from "../../component/navbar"
import DB from '../../lib/db.json';
import { ItemsView } from "./items-view";
import cart from '../../assets/cart.svg'

export const HomePage = () => {
    const list = [
        {
            name: 'All',
            index: 1,
            Actived: true,
            colorActive: 'text-black',
            children: (
                <div>
                    All
                </div>
            )
        },
        {
            name: 'T-shirt',
            index: 2,
            Actived: false,
            colorActive: 'text-black',
            children: (
                <div>
                    T-shirt
                </div>
            )
        },
        {
            name: 'Hoodies',
            index: 3,
            Actived: false,
            children: (
                <div>
                    Hoodies
                </div>
            )
        },
        {
            name: 'Posters',
            index: 4,
            Actived: false,
            children: (
                <div>
                    Posters
                </div>
            )
        },
        {
            name: 'Albums',
            index: 5,
            Actived: false,
            children: (
                <div>
                    Albums
                </div>
            )
        },
        {
            name: 'Cart',
            index: 6,
            Actived: false,
            children: (
                <img src={cart} alt="cart" />
            )
        },
    ]
    const [filter, setFilter] = useState({
        list: DB,
        name: 'All',
        filterName: DB
    })
    const [listNavbar, setListNavbar] = useState(list)
    const handleLink = (index:any) => {
        const filter = listNavbar.filter((item)=>item.index === index)
        filterHandler(filter[0].name)
        setListNavbar((prev)=>{
          return prev.map((item)=>{
            if(item.index === index){
              return {...item, Actived: true}
            }else{
              return {...item, Actived: false}
            }
          })
        })
      }
    const filterHandler = (name:string) => {
        if(name === 'All'){
            setFilter({
                list: DB,
                name: 'All',
                filterName: DB
            })
        }else{
            const filterName = DB.filter((item)=>{
                return item.category === name
            })
            setFilter({
                list: DB,
                name: name,
                filterName: filterName
            })
        }
    }
    console.log(filter,'filter')
    useEffect(()=>{},[listNavbar])
    return(
        <div className="h-full flex flex-col justify-start items-center gap-y-[50px] pt-[59px]">
            <div
                className="bg-white flex flex-col pt-[20px] justify-between w-[75%] h-[20%] items-center"
            >
                <div className="flex justify-center w-full h-full">
                    <h1 
                    className="text-4xl font-bold">
                        Seller
                    </h1>
                </div>
                <hr className="w-full bg-black"></hr>
                <Navbar
                    tabs={listNavbar}
                    handleLink={handleLink}
                    style={{backgroundColor: 'white'}}
                    typeList="childList_1"
                />
            </div>
            <div
            className="w-[75%]"
            >
                {listNavbar.filter((item)=>{
                    const items = item.Actived
                    console.log(items,'items3')
                    return items
                }).map((item)=>
                {
                    console.log(item,'items2')
                    return(
                        <ItemsView
                        key={item.index} 
                        ListItems={filter}
                        />
                    )
                })}
            </div>
        </div>
    )
}