
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout  = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const navlist1 = [
        {
            id:1,
            name: 'Home',
            link: '/home'
        },
        {
            id:2,
            name: 'Typography',
            link: '/typopgraphy'
        },
        {
            id:3,
            name: 'Contact',
            link: '/contact'
        },
        {
            id:4,
            name: 'My Account',
            link: '/myaccount'
        },
    ]
    const navlist2 = [
        {
            id:2,
            name: 'T-shirt',
            link: '/t-shirt'
        },
        {
            id:3,
            name: 'Hoodies',
            link: '/hoodies'
        },
        {
            id:4,
            name: 'Posters',
            link: '/posters'
        },
        {
            id:5,
            name: 'Albums',
            link: '/albums'
        },
        {
            id:6,
            name: 'Cart',
            link: '/cart'
        }
    ]
    const handleCategoryClick = (category:string) => {
        setSelectedCategory(category);
      };
    return(
        <div className="w-full h-full pb-10">
            <header className='flex flex-col'>
                <nav className="fixed top-0 left-0 flex bg-black w-full justify-center py-[10px] z-50">
                    <ul className="flex flex-row gap-x-[40px]">
                        {navlist1.map((item)=>{
                            return(
                                <li key={item.id} className="text-white hover:text-gray-500 cursor-pointer">
                                    <Link to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className='bg-white mx-[20%] flex flex-col mt-[45px]'>
                    <div className='flex justify-center py-[3%]'>
                        <span className='font-semibold text-[40px]'>
                            Seller
                        </span>
                    </div>
                    <hr className='w-full bg-black'></hr>
                    <nav>
                        <ul className='flex flex-row justify-center gap-x-[3%] py-[10px]'>
                            {navlist2.map((item)=>{
                                return(
                                    <li 
                                    key={item.id} 
                                    className="text-black hover:text-gray-500 cursor-pointer font-semibold"
                                    onClick={() => handleCategoryClick(item.name)}
                                    >
                                            {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
            <main className='flex justify-center mt-[40px] bg-white mx-[20%]'>
                <Outlet context={selectedCategory}/>
            </main>
        </div>
    )
}