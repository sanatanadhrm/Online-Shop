// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Card } from "../../component/card"

export const ItemsView = ({ListItems}:any) => {
    console.log(ListItems,'items')
    return(
        <>
            <div
            className="flex flex-wrap justify-center items-center gap-[100px] py-[40px] bg-white w-full"
            >
                {ListItems.filterName.map((item:any)=>{
                    return(
                        <Card
                        key={Math.random()}
                        data={item}
                        />
                    )
                })}
            </div>
        </>
    )
}