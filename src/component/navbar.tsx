import { useEffect } from "react"
import classNames from "classnames"
interface Tab {
    index: number,
    name: string,
    Actived: boolean,
    children?: React.ReactNode
}
interface NavbarProps {
    tabs: Tab[],
    handleLink: (index: number) => void,
    style?: any,
    typeList?: string
}
export const Navbar = ({tabs, handleLink, style, typeList}:NavbarProps) => {
    const handleNav = (e: Tab) => {
        handleLink(e.index)
    }
    const typeListClass = classNames({
        "flex flex-row justify-center gap-x-[20px] w-full items-center bg-black p-4": typeList === "mainlist",
        "flex flex-row justify-center gap-x-[20px] w-full items-center bg-white p-4": typeList === "childList_1",
    })
    const Activetabs = classNames({
        "text-gray-500 cursor-pointer hover:text-gray-500" : typeList === "mainlist" || typeList === "childList_1",
    })
    const NonActivetabs = classNames({
        "text-white cursor-pointer hover:text-gray-500" : typeList === "mainlist",
        "text-black cursor-pointer hover:text-gray-500" : typeList === "childList_1",
    })
    useEffect(()=>{
    },[tabs])
    return(
        <div 
        className={typeListClass}
        style={style}
        >
            {tabs.map((tab: Tab) => {
                return(
                    <div 
                    className={tab.Actived ? Activetabs : NonActivetabs}
                    onClick={()=>handleNav(tab)}
                    key={tab.index}
                    >
                        {tab.name === 'Cart' ? tab.children : tab.name}
                    </div>
                )
            })}
        </div>
    )
}