import About from "@/components/About";
import Banners from "@/components/Banners";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Committee from "@/components/Committee";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="relative"><Hero /></div>
        <div className="relative z-10 -mt-80 md:-mt-32"><About /></div>
      </div>
      <Speakers />
      <Schedule />
      <Committee />
      <Banners />
      <Contact />
    </main>
  );
}
