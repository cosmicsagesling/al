import HeroSection from "@/components/hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
        <Navbar/>

      <main className="bg-white">
        <HeroSection/>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} MPAS Training Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

