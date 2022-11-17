import Nav from "./Nav";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <div className="stack justify-center lg:px-24 mb-4">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout