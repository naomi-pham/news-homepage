import Link from "next/link";
import { useState } from "react";
import data from "../../data/Data";

const Nav = () => {
  const { site, nav } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  }

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:px-24">
        {/* Nav Desktop */}
        <img src={site.logo} alt="logo" />
        <ul className="sm:flex gap-8 hidden">
          {nav.map((data) => (
            <li key={data.id}>
              <Link href={data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <img
          onClick={toggleExpanded}
          src={
            isExpanded
              ? "../images/icon-menu-close.svg"
              : "../images/icon-menu.svg"
          }
          className="z-20 sm:hidden"
        />
        {/* Nav Mobile */}
        {isExpanded && (
          <div className="sm:hidden fixed top-0 bottom-0 right-0 h-full w-8/12 bg-light z-10">
            <ul className="stack text-2xl mt-24 pl-8">
              {nav.map((data) => (
                <li onClick={toggleExpanded} key={data.id}>
                  <Link href={data.link}>{data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
