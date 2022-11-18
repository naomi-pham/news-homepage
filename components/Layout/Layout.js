import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20 sm:my-6 lg:px-24">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
