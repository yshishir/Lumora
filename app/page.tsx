import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#E8EDF2]">
      <Navbar/>
      <main className="flex flex-1 items-center justify-center">
        Hello is the blog site
      </main>
      <Footer/>
    </div>
  );
}
