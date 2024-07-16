import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";


export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen bg-white text-black">
      <Header/>
      <Products />
      <Footer/>
    </div>
  );
}
