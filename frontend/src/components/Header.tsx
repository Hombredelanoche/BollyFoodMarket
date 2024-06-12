"use client";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const BurgerMenu = () => {
  return (
    <article className="flex flex-col p-5 justify-around">
      <div className="w-14 h-0.5 bg-black"></div>
      <div className="w-14 h-0.5 bg-black"></div>
      <div className="w-14 h-0.5 bg-black"></div>
    </article>
  );
};

const Header = () => {
  return (
    <>
      <header className="flex m-5 shadow-sm rounded-sm bg-slate-50 items-center gap-5">
        <section className="flex gap-5">
          <BurgerMenu />
          <Image src="/BollyFoodMarket.svg" alt="logo" width={90} height={90} />
        </section>
        <section className="flex items-center align-middle justify-around w-full">
          <input
            type="text"
            className="border-2 p-2 rounded-sm w-2/3"
            placeholder="Search..."
          />
          <Link href="#">Catalogue</Link>
          <article className="flex justify-around gap-14">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />
          </article>
        </section>
      </header>
    </>
  );
};

export default Header;
