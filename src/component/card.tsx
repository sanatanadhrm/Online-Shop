import TShirt from '../assets/T_shirt.jpeg'
import Hoodie from '../assets/hoodie.jpeg'
import Poster from '../assets/Posters.jpeg'
import Album from '../assets/Albums.jpeg'
import yellowStar from '../assets/star_shine.svg'
import grayStar from '../assets/star_gray.svg'
export const Card = ({data}:any) => {
    const T_shirt = TShirt
    const Hoodies = Hoodie
    const Posters = Poster
    const Albums = Album
    console.log(data.image)
    return(
        <div className="flex flex-col justify-center items-center gap-y-[14px] w-[160px]">
            <div
            className="flex justify-end p-[5px] ring-1 ring-gray-200"
            >
                {data.Sale ? (<div className='flex justify-center items-center font-bold py-[1px] px-[8px] bg-[#fa8072] absolute text-white'>
                    Sale!
                </div>):(<div></div>)}
                <img
                className="w-[150px] h-[180px]"
                src={data.category === 'T-shirt' ? T_shirt : data.category === 'Hoodies' ? Hoodies : data.category === 'Posters' ? Posters : Albums}
                alt={data.category}
                >
                </img>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-blue-500">
                    {data.name}
                </div>
                <div className='flex flex-row'>
                    {
                        Array(5).fill(0).map((e, i) => (
                           data.Rate > i ? (
                            <img key={Math.random()} src={yellowStar} alt='starshine'></img>
                           ):
                            (
                             <img key={Math.random()} src={grayStar} alt='stargray'></img>
                            )
                        ))
                    }
                </div>
                <div className="font-extrabold">
                    {data.Sale ? (
                     <div>
                        <span className='text-gray-500'>
                            <s>
                                ${(data.price).toFixed(2)}
                            </s>
                        </span>
                        {' '}
                        ${(data.Sale).toFixed(2)}
                    </div>
                    ): ('$' + (data.price).toFixed(2))}
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