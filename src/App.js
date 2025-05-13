import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
/*
HeaderComponent
 - Logo
 - Nav Items
BodyComponent
 - Search
 - Restaurant Container
 - Restaurant Cards
FooterComponent
 - Copyright
 - Links
 - Contact
*/


const AppLayout = () =>{
  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {name:"Akshay Bibekar"};
    setUserName(data.name);
  },[]);
  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <HeaderComponent/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout />,
  children:[
    {
      path:"/",
      element:<BodyComponent />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/restaurant/:id",
      element:<RestaurantInfo />
    },
    {
      path:"cart",
      element:<Cart />
    }
  ],
  errorElement:<Error />
},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);

