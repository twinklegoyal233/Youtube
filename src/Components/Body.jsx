import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Video from "../Pages/Video/Video"
import Navbar from "../Components/Navbar/Navbar"
import store from "../utils/store"
import { Provider } from "react-redux"

const Body = () => {
  const appRouter = createBrowserRouter([{
    path : "/",
    element : <Home  />
  },
{
  path : "/video/:categoryId/:videoId",
  element : <Video/>
}
])
  return (
    <Provider store = {store}>

    <div>
      <Navbar/>
    <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
  )
}

export default Body
