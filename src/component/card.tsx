import TShirt from '../assets/T_shirt.jpeg'
import Hoodie from '../assets/hoodie.jpeg'
import Poster from '../assets/Posters.jpeg'
import Album from '../assets/Albums.jpeg'
export const Card = ({data}:any) => {
    const T_shirt = TShirt
    const Hoodies = Hoodie
    const Posters = Poster
    const Albums = Album
    console.log(data.image)
    return(
        <div className="flex flex-col justify-center items-center gap-y-[14px] w-[160px]">
            <div
            className="p-[5px] ring-1 ring-gray-200"
            >
                <img
                className="w-[150px] h-[180px]"
                src={data.category === 'T-shirt' ? T_shirt : data.category === 'Hoodies' ? Hoodies : data.category === 'Posters' ? Posters : Albums}
                alt={data.category}
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-blue-500">
                    {data.name}
                </div>
                <div className="font-extrabold">
                    ${(data.price).toFixed(2)}
                </div>
            </div>
            <button
                className=" bg-black text-white p-[5px] w-[100px] text-[13px] hover:bg-gray-500"
            >
                Add to Cart
            </button>
        </div>
    )
} 