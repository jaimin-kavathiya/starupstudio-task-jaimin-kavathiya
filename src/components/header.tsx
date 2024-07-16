"use client";
import { useState } from "react";

import LogoIcon from "@/assets/images/header-icons/logo.png";
import SearchIcon from "@/assets/images/header-icons/search-icon.png";
import WishListIcon from "@/assets/images/header-icons/wishlist-icon.png";
import CartIcon from "@/assets/images/header-icons/bag-icon.png";
import ProfileIcon from "@/assets/images/header-icons/profile-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import AdvertisementStripBar from "./advertisementStripBar";
import Hero from "./hero";

function Header() {
  const langugages = ["ENG", "AR", "SP", "GA"];
  const [isLanguageOpen, setLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(langugages[0]);

  return (
    <header className="min-w-full">
      <AdvertisementStripBar />
      <div className="hero-content w-full flex flex-col">
        <div className="brand-container w-full flex justify-between px-2 py-5 sm:px-14 sm:py-5">
          <div className="w-1/3 logo flex gap-1 items-center justify-start">
            <div className="sm:hidden block">
              <FontAwesomeIcon
                icon={faBars}
                className="fas fa-bars w-[20px] h-[20px]"
              />
            </div>
            <Link href="/">
              <Image
                priority
                src={LogoIcon}
                className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]"
                alt="logo"
              />
            </Link>
          </div>
          <div className="uppercase sm:w-1/2 w-max text-nowrap text-center brand-name text-[20px] sm:text-[36px]">
            LOGO
          </div>
          <div className="w-1/3 flex items-center justify-end gap-3 sm:gap-6">
            <Image
              priority
              src={SearchIcon}
              className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer"
              alt="search"
            />
            <Image
              priority
              src={WishListIcon}
              className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer"
              alt="wishlist"
            />
            <Image
              priority
              src={CartIcon}
              className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer"
              alt="cart"
            />
            <Image
              priority
              src={ProfileIcon}
              className="hidden sm:block sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer"
              alt="profile"
            />

            <div
              onClick={() => setLanguage(!isLanguageOpen)}
              className="w-auto min-w-12 flex justify-center sm:justify-end items-center gap-x-2 product-filter cursor-pointer relative"
            >
              <p className="font-bold text-sm">{currentLanguage}</p>
              <FontAwesomeIcon
                icon={isLanguageOpen ? faChevronDown : faChevronUp}
              />
              {isLanguageOpen ? (
                <div className="absolute z-[100] bg-white w-auto min-w-20 top-7 right-5 sm:right-0 flex flex-col items-end gap-y-5  border rounded shadow px-4 py-4 text-sm">
                  {langugages.map((option) => (
                    <p
                      key={option}
                      onClick={() => setCurrentLanguage(option)}
                      className={`flex gap-x-2 ${
                        option == currentLanguage ? "font-bold" : "font-normal"
                      }`}
                    >
                      {option == currentLanguage ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        ""
                      )}
                      {option}
                    </p>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            {/* TODO add dropdown here */}
          </div>
        </div>
        <div className="sm:border-b hidden sm:flex items-center justify-center sm:gap-10 md:gap-14 px-14 py-5">
          <Link href="/" className="md:text-xl font-bold">
            SHOP
          </Link>
          <Link href="/" className="md:text-xl font-bold">
            SKILLS
          </Link>
          <Link href="/" className="md:text-xl font-bold">
            STORIES
          </Link>
          <Link href="/" className="md:text-xl font-bold">
            ABOUT
          </Link>
          <Link href="/" className="md:text-xl font-bold">
            CONTACT US
          </Link>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
