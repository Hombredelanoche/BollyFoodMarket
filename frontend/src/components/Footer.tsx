"use client";

import Button from "@/components/ui/Button";
import ContactUs from "@/components/ui/ContactUs";
import SocialMedia from "@/components/ui/SocialMedia";
import { faBook, faList, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <section className="flex bg-white w-full items-center p-10">
          <div className="w-1/3 flex flex-col p-5 items-center gap-3">
            <FontAwesomeIcon icon={faTruck} />
            <h5>
              Livraison offerte à partir de{" "}
              <span className="font-bold">40 euros d{"'"}achat</span>
            </h5>
            <Link href="#">
              <Button>Voir le catalogue</Button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col p-5 items-center gap-3">
            <FontAwesomeIcon icon={faBook} />

            <p className="font-bold">Découvrez notre équipe !</p>
            <Link href="#">
              <Button></Button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col p-5 items-center gap-3">
            <FontAwesomeIcon icon={faList} />
            <p className="font-bold">Voir les retours client</p>
            <Link href="#">
              <Button></Button>
            </Link>
          </div>
        </section>
        <section className="flex justify-between  bg-[#E8C798] p-10 items-center">
          <article className="flex flex-col justify-between w-1/4 items-center ">
            <Image
              src="/BollyFoodMarket.svg"
              width={200}
              height={200}
              alt="footerLogo"
            ></Image>

            <SocialMedia />
          </article>

          <article className="flex flex-col justify-between w-1/4">
            <ContactUs />
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
