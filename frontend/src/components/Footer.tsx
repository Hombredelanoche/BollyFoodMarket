import { faBook, faList, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <section className="flex bg-white w-full items-center">
          <div className="w-1/3 flex flex-col p-5 items-center gap-2">
            <FontAwesomeIcon icon={faTruck} />
            <h5>
              Livraison offerte à partir de{" "}
              <span className="font-bold">40 euros d'achat</span>
            </h5>
            <Link href="#">Voir le catalogue </Link>
          </div>
          <div className="w-1/3 flex flex-col p-5 items-center gap-2">
            <FontAwesomeIcon icon={faBook} />
            <p className="font-bold">Découvrez notre équipe !</p>
            <Link href="#">Voici notre histoire</Link>
          </div>
          <div className="w-1/3 flex flex-col p-5 items-center gap-2">
            <FontAwesomeIcon icon={faList} />
            <p className="font-bold">Les retours client</p>
            <Link href="#">Cliquez ici</Link>
          </div>
        </section>
        <section className="flex bg-[#F2DDA4] p-5">
          <article className="w-2/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            reiciendis vero ab voluptates ipsa excepturi quidem id asperiores ea
            mollitia saepe hic molestiae consequuntur aliquid at molestias
            provident, repudiandae perferendis.
          </article>
          <article className="w-2/4 flex flex-col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            reiciendis cupiditate repudiandae impedit sequi voluptas ut corrupti
            architecto similique praesentium magnam hic. Sed amet consectetur
            rerum, quod corporis necessitatibus molestiae.
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
