"use client";
import MenuBurger from "@/components/MenuBurger";
import UserMenu from "@/components/UserMenu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex m-5 shadow-sm rounded-sm bg-slate-50 items-center content-center gap-5">
        <section className="flex gap-5">
          <MenuBurger />
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
          <UserMenu />
        </section>
      </header>
    </>
  );
};

export default Header;
