import Card from "./blog-card";
import { FaLinux } from "react-icons/fa";

import { FaBitcoin } from "react-icons/fa";
export default function Carousel() {
  return (
    <div className="carousel rounded-box ">
      <div className="carousel-item">
        <Card
          Component={<FaBitcoin size={200} color={"oklch(var(--n))"} />}
          title="BTC"
          ne={true}
          desc="How Bitcoin took over the world, a computer science student's perspective"
          tags={["Crypto", "Tech", "Finance"]}
        />
        <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
         <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
          <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
          <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
          <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
          <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
          <Card 
          Component={<FaLinux size={200} color={"oklch(var(--n))"} />}
          title="NA"
          ne={false}
          desc=""
          tags={[]}
        />
      </div>
    </div>
  );
}
