import { Header, Footer } from "../static"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default HomeLayout
