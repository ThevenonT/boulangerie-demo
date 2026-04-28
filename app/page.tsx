import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Hours from "./components/Hours";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Hours />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
