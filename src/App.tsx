import { useState } from "react"
import { Navbar } from "./component/navbar"
import { HomePage } from "./pages/Home/home"

function App() {
  const listNavbar = [
    {
      index: 1,
      name: 'Home',
      Actived: true,
      children: (
        <HomePage/>
      )
    },
    {
      index: 2,
      name: 'Typography',
      Actived: false,
      children: (
        <div>
          Typhography
        </div>
      )
    },
    {
      index: 3,
      name: 'Contact',
      Actived: false,
      children: (
        <div>
          Contact
        </div>
      )
    },
    {
      index: 4,
      name: 'My Account',
      Actived: false,
      children: (
        <div>
          My Account
        </div>
      )
    }
  ]
  const [navbar, setNavbar] = useState(listNavbar)
  const handleLink = (index:any) => {
    setNavbar((prev)=>{
      return prev.map((item)=>{
        if(item.index === index){
          return {...item, Actived: true}
        }else{
          return {...item, Actived: false}
        }
      })
    })
  }
  console.log(navbar)
  return (
    <>
      <div className="w-full absolute">
        <Navbar
        tabs={navbar}
        handleLink={handleLink}
        typeList="mainlist"
        >
        </Navbar>
      </div>
      {navbar.filter((item)=>item.Actived).map((item)=>
      {
        return(
          <div
          className="bg-gray-200 h-screen"
          key={item.index}
          >
            {item.children}
          </div>
        )
      })}
    </>
  )
}

export default App
