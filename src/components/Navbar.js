
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon,} from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";

import { AcademicCapIcon } from "@heroicons/react/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  let history = useHistory();
  function handleClick(direction) {
    history.push(direction);
  }
  const navigation = [
    { name: "About me", href: "/", current: false },
    { name: "Resume", href: "/resume", current: false },
    { name: "Education" , href: "/education", current: false, icon: <AcademicCapIcon className='h-10 '/>, },
    { name: "Projects", href: "/projects", current: false },

  ]
  return (
    
    <Disclosure as="nav" className=" mx-auto   shadow rounded-3xl  sticky top-0 bg-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex items-center justify-between h-14 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-0">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={()=>history.push(item.href)}
                        className={classNames(
                          item.current
                            ? " text-white hover:bg-blue-600 animate-pulse"
                            : "text-black hover:bg-blue-600 hover:text-white ",
                          "px-3 py-2 rounded-full text-xl font-medium transition duration-75 ease-linear"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}{}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white hover:bg-blue-700 rounded-full"
                      : "text-black hover:bg-blue-600 hover:text-white rounded-full",
                    "block px-3 py-2  text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
