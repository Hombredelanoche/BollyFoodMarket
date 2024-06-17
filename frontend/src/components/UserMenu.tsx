"use client";
import React, { useEffect, useState } from "react";
import {
  faUser,
  faCartShopping,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const UserMenu = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      setToken(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(false);
  };

  return (
    <article className="flex justify-around gap-14">
      {token ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faDoorOpen} />
        </button>
      ) : (
        <Link
          href="/auth/login"
          className="flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )}
      <Link href="/panier" className="flex items-center gap-2 cursor-pointer">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </article>
  );
};

export default UserMenu;
