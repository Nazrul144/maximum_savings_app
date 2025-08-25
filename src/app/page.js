import About from "@/components/LandingPage/About";
import Header from "@/components/LandingPage/Header";
import Subscription from "@/components/LandingPage/Subscription";
import Works from "@/components/LandingPage/Works";
import { Subscript } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Header/>
      <Works/>
      <About/>
      <Subscription/>
    </div>
  );
}
