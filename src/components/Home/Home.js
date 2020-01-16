import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { NavLink } from "react-router-dom";

const items = [
  {
    src: "/images/em.jpg",
    altText: "Slide 1",
    caption: "Under 12",
    header: "Emirates Fc",
    key: "1"
  },
  {
    src: "/images/jp.jpg",
    altText: "Slide 2",
    caption: "Under 14 Girls",
    header: "Akakoro Academy ",
    key: "2"
  },
  {
    src: "/images/mn.jpg",
    altText: "Slide 3",
    caption: "Under 14",
    header: "Real Kisumu Fc",
    key: "3"
  }
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items} />

      <br />

      <nav>
        <a className="img" aria-current="page" href="/TableStandings">
          Table Standings
          <img className="img" src="/public/images/nj.png" alt="Table"/>g
        </a>
      </nav>
    </div>
  );
}
export default Home;
