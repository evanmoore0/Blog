import NavBar from "./home/nav-bar";

import Footer from "./home/footer";

export default function Layout({ children }) {
  return (
    <div className="bg-base-100 flex flex-col h-screen justify-between">
      <NavBar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
