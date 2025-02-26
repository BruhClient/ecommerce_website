import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
export const dynamic = "force-dynamic";

function Home() {
  return ( <div>
    <Hero />
    <Newest />
  </div> );
}

export default Home;