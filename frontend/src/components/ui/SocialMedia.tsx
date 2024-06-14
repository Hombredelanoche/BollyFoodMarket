import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialMedia = ({ ...otherProps }) => {
  return (
    <>
      <ul className={clsx("flex gap-10")} {...otherProps}>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faFacebook} />
          <Link href="#"> Facebook</Link>
        </li>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faInstagram} />
          <Link href="#"> Instagram </Link>
        </li>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faTiktok} />
          <Link href="#"> TikTok </Link>
        </li>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faSnapchat} />
          <Link href="#">Snapchat</Link>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
