"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Strat Hacking", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div
            className="backdrop-filter backdrop-blur-xl pt-3 top-0 lg:pt-4 fixed md:px-32 pb-1 z-40"
            style={{ width: "100%" }}
          >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-7 flex items-center sm:hidden  z-50">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-left justify-left sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      className="block h-24 w-24 lg:hidden"
                      src="/assets/hl.png"
                      alt="Hackovate-Logo"
                      width={100}
                      height={100}
                    />
                    <Image
                      className="hidden h-40 w-auto lg:block"
                      src="/assets/hackovate_logo.png"
                      alt="Hackovate-Logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              </div>
              <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="/#About"
                  className="Headerstyles__StyledHeaderLink-sc-cucath-8 zZYfh md:mr-8"
                >
                  About
                </Link>
                <Link
                  href="/register"
                  className="ButtonMainstyles__StyledButtonMain-sc-1f8wtna-0 kMzRJv "
                >
                  <p className="font-bold">Start Hacking</p>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden pt-20">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
