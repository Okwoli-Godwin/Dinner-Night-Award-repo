import { Header, Footer } from "../static"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../../utils/ScrollToTop"

const HomeLayout = () => {
  return (
    <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
    </ScrollToTop>
  )
}

export default HomeLayout
