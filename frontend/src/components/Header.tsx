"use client";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BurgerMenu = () => {
  return (
    <>
      <article className="flex flex-col p-5 justify-center gap-2 cursor-pointer">
        <div className="w-14 h-0.5 bg-black"></div>
        <div className="w-14 h-0.5 bg-black"></div>
        <div className="w-14 h-0.5 bg-black"></div>
      </article>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header className="flex m-5 shadow-sm rounded-sm bg-slate-50 items-center content-center gap-5">
        <section className="flex gap-5">
          <BurgerMenu />
          <Link href="/">
            <Image
              src="/BollyFoodMarket.svg"
              alt="logo"
              width={90}
              height={90}
            />
          </Link>
        </section>
        <section className="flex items-center align-middle justify-around w-full">
          <input
            type="text"
            className="border-2 p-2 rounded-sm w-2/3"
            placeholder="Search..."
          />
          <Link href="/catalogue">Catalogue</Link>
          <article className="flex justify-around gap-14">
            <Link href="/auth/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link href="/panier">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </article>
        </section>
      </header>
    </>
  );
};

export default Header;
