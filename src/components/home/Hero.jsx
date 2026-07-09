import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = useSelector((store) => store.user);

  console.log("User", user);

  return (
    <div>
      <section className="relative flex flex-col items-center bg-white text-green-500 text-sm pb-10">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur bg-white/80 border-b border-green-100">
          <Link to="/">
            <img
              src="/application_paperedit_12787.ico"
              alt="logo"
              className="h-11 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500 border border-green-200 bg-green-50/80 px-10 py-3 rounded-full">
            <a
              href="#"
              className="text-sm text-green-600 hover:text-green-800 transition"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm text-green-600 hover:text-green-800 transition"
            >
              Feature
            </a>
            <a
              href="#testimonials"
              className="text-sm text-green-600 hover:text-green-800 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm text-green-600 hover:text-green-800 transition"
            >
              Contact
            </a>
          </div>

          {user.length === 0 && (
            <Link to="/login">
              <button className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-white rounded-full cursor-pointer">
                Login
              </button>
            </Link>
          )}

          {user.length !== 0 && (
            <Link to="/app">
              <button className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-white rounded-full cursor-pointer">
                Dashboard
              </button>
            </Link>
          )}

          <button
            id="open-menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden active:scale-90 transition"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu text-green-600"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navbar */}
        <div
          id="mobile-navLinks"
          aria-hidden={!mobileOpen}
          className={`fixed inset-0 z-100 bg-white/90 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="text-green-600 hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#feature"
            onClick={() => setMobileOpen(false)}
            className="text-green-600 hover:text-green-800"
          >
            Feature
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileOpen(false)}
            className="text-green-600 hover:text-green-800"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-green-600 hover:text-green-800"
          >
            Contact
          </a>

          <button
            id="close-menu"
            onClick={() => setMobileOpen(false)}
            className="active:ring-3 active:ring-green-300 aspect-square size-10 p-1 items-center justify-center bg-green-100 hover:bg-green-200 transition text-green-700 rounded-md flex"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center text-green-700 text-sm mt-10">
          <span>{user.length !== 0 ? `Welcome ${user.name}` : ""}</span>
        </div>
        {/* Promo badge */}
        <a
          href="https://prebuiltui.com"
          className="flex items-center gap-2 rounded-full bg-green-50 border border-green-200 p-2 mt-12"
        >
          <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <div className="flex items-center text-green-700 text-sm">
            <span>Try 30 days free trial option</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="m6 4 4 3.5L6 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>

        {/* Main headline */}
        <h1 className="text-center text-4xl leading-tight md:text-6xl/18 mt-3 font-semibold max-w-2xl px-4 text-green-600">
          Your Perfect Resume, Powered by AI
        </h1>

        {/* Sub-headline */}
        <p className="text-center text-sm md:text-base/7 text-green-500 max-w-md mt-2 px-4">
          From raw experience to polished resume – in seconds. Powered by
          cutting‑edge AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-8">
          {user.length === 0 ? (
            <>
              {" "}
              <Link to="/app">
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-7 py-3 cursor-pointer">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full px-7 py-3 cursor-pointer border border-green-300">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <Link to="/app">
              <button className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full px-7 py-3 cursor-pointer border border-green-300">
                Dashboard
              </button>
            </Link>
          )}
        </div>

        {/* Trusted by */}
        <p className="text-green-400 mt-20 md:mt-25">
          Trusting by leading brands, including
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mx-auto mt-10 px-4 md:px-0">
          {/* Brand logos – you can optionally update their fill colors to green shades */}
          <svg
            width="101"
            height="29"
            viewBox="0 0 101 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17.098C3.114.945.854 3.338.14 6.34c-.904 3.804 2.858 5.413 3.167 4.885.363-.62-.674-.83-.888-2.803-.276-2.55.929-5.398 2.445-6.648.282-.232.269.09.269.689 0 1.069-.06 10.666-.06 12.67 0 2.71-.114 3.565-.319 4.411-.207.857-.54 1.436-.287 1.66.282.249 1.485-.345 2.181-1.301.836-1.147 1.128-2.525 1.18-4.021.064-1.804.061-4.665.064-6.298.003-1.497.026-5.88-.027-8.516C7.853.42 6.03-.257 5.17.098m73.015 12.684c-.066 1.41-.383 2.51-.776 3.287-.762 1.504-2.343 1.971-3.014-.19-.366-1.18-.383-3.147-.12-4.792.268-1.675 1.015-2.94 2.253-2.826 1.22.113 1.792 1.66 1.657 4.521m-20.578 8.742c-.017 2.341-.391 4.394-1.195 4.99-1.139.846-2.67.212-2.353-1.497.28-1.512 1.607-3.055 3.55-4.942 0 0 .005.43-.002 1.45m-.311-8.755c-.07 1.283-.408 2.572-.777 3.3-.762 1.505-2.354 1.975-3.014-.19-.45-1.48-.343-3.394-.12-4.6.29-1.566.992-3.018 2.253-3.018 1.226 0 1.83 1.323 1.658 4.508m-11.922-.02c-.074 1.36-.344 2.495-.777 3.32-.782 1.494-2.33 1.968-3.013-.19-.492-1.557-.325-3.679-.12-4.825.304-1.701 1.065-2.907 2.253-2.793 1.22.117 1.813 1.66 1.657 4.488m54.633 1.588c-.299 0-.435.302-.547.811-.391 1.77-.801 2.17-1.331 2.17-.591 0-1.123-.876-1.26-2.631-.107-1.38-.09-3.92.048-6.447.028-.52-.118-1.033-1.533-1.539-.61-.217-1.495-.538-1.936.51-1.245 2.957-1.732 5.305-1.847 6.259-.006.049-.068.059-.078-.056-.073-.764-.237-2.152-.257-5.07-.004-.568-.127-1.053-.765-1.45-.414-.257-1.672-.712-2.125-.17-.393.442-.847 1.634-1.32 3.047a250 250 0 0 1-.65 1.925s.004-3.098.009-4.273c.002-.444-.307-.591-.4-.618-.42-.12-1.246-.32-1.597-.32-.433 0-.54.238-.54.585 0 .045-.068 4.079-.068 6.899l.002.398c-.24 1.296-1.016 3.056-1.86 3.056-.846 0-1.245-.736-1.245-4.098 0-1.961.06-2.814.09-4.233.016-.817.05-1.445.047-1.587-.006-.437-.773-.657-1.13-.738a3.4 3.4 0 0 0-.915-.1c-.344.019-.588.241-.588.547l.002.476c-.444-.686-1.158-1.164-1.633-1.302-1.28-.374-2.614-.043-3.621 1.344-.8 1.101-1.283 2.349-1.473 4.14-.139 1.31-.093 2.64.153 3.763-.298 1.268-.851 1.788-1.457 1.788-.88 0-1.518-1.413-1.444-3.856.05-1.607.376-2.735.733-4.367.153-.695.029-1.06-.282-1.408-.284-.32-.891-.484-1.763-.283-.621.144-1.51.298-2.322.416 0 0 .049-.192.089-.531.211-1.78-1.755-1.636-2.382-1.067-.374.34-.629.74-.725 1.46-.154 1.141.793 1.68.793 1.68-.31 1.399-1.072 3.226-1.858 4.547-.421.708-.743 1.232-1.16 1.79q0-.312-.003-.622c-.01-2.94.03-5.255.048-6.09.017-.817.05-1.428.049-1.57-.005-.32-.195-.44-.589-.593a4.2 4.2 0 0 0-1.188-.26c-.54-.042-.865.24-.857.572.002.063.002.45.002.45-.444-.687-1.158-1.164-1.633-1.303-1.28-.373-2.614-.042-3.621 1.344-.8 1.101-1.325 2.647-1.473 4.127-.138 1.38-.113 2.553.076 3.54-.204.99-.789 2.024-1.45 2.024-.845 0-1.326-.736-1.326-4.098 0-1.961.06-2.814.089-4.233.017-.817.05-1.444.048-1.587-.006-.436-.774-.656-1.13-.738a3.3 3.3 0 0 0-.945-.098c-.327.024-.557.312-.557.526v.495c-.443-.686-1.157-1.163-1.632-1.302-1.28-.373-2.607-.037-3.622 1.344-.661.9-1.197 1.898-1.472 4.107a14 14 0 0 0-.11 1.796c-.264 1.587-1.43 3.416-2.382 3.416-.558 0-1.09-1.064-1.09-3.332 0-3.02.19-7.322.223-7.737 0 0 1.204-.02 1.437-.022.601-.007 1.145.007 1.945-.033.401-.02.788-1.437.374-1.612-.188-.08-1.515-.149-2.04-.16-.443-.01-1.674-.1-1.674-.1s.11-2.854.136-3.156c.022-.251-.308-.38-.498-.46-.46-.191-.873-.283-1.362-.382-.675-.137-.982-.003-1.042.558-.09.85-.136 3.344-.136 3.344-.496 0-2.19-.096-2.685-.096-.46 0-.958 1.949-.32 1.973.732.028 2.009.052 2.855.077 0 0-.037 4.372-.037 5.722l.001.416c-.466 2.389-2.107 3.679-2.107 3.679.353-1.58-.367-2.767-1.664-3.772-.477-.37-1.42-1.07-2.476-1.839 0 0 .611-.592 1.153-1.784.384-.845.401-1.81-.541-2.024-1.558-.352-2.842.773-3.225 1.974-.297.93-.139 1.621.443 2.338q.064.08.136.16a61 61 0 0 1-1.244 2.26c-1.135 1.933-1.993 3.46-2.64 3.46-.519 0-.512-1.55-.512-3.004 0-1.252.094-3.135.17-5.085.024-.644-.304-1.012-.853-1.344-.334-.203-1.046-.6-1.459-.6-.617 0-2.4.083-4.083 4.873-.212.604-.629 1.704-.629 1.704l.036-5.76c0-.136-.073-.266-.24-.356-.284-.151-1.042-.46-1.715-.46q-.482 0-.482.439l-.058 9.013c0 .685.018 1.484.087 1.833.068.35.18.634.317.804a.9.9 0 0 0 .558.35c.244.05 1.58.219 1.649-.283.083-.602.086-1.252.787-3.68 1.092-3.778 2.515-5.622 3.185-6.277.117-.114.25-.12.244.067-.029.828-.13 2.898-.197 4.657-.181 4.706.689 5.578 1.933 5.578.951 0 2.293-.93 3.73-3.284a829 829 0 0 0 2.392-3.943c.436.397.925.824 1.414 1.28 1.135 1.06 1.508 2.068 1.26 3.024-.188.73-.901 1.484-2.17.752-.369-.214-.527-.378-.898-.62-.2-.129-.505-.167-.688-.032-.474.352-.746.8-.901 1.355-.15.54.399.825.968 1.074.49.215 1.544.41 2.217.432 2.618.086 4.716-1.244 6.177-4.675.261 2.963 1.374 4.64 3.307 4.64 1.292 0 2.588-1.644 3.155-3.26.162.659.403 1.232.714 1.717 1.49 2.321 4.38 1.822 5.83-.15.45-.61.518-.828.518-.828.212 1.861 1.735 2.512 2.608 2.512.977 0 1.986-.455 2.693-2.02q.125.255.272.485c1.49 2.322 4.38 1.822 5.831-.15q.103-.138.18-.25l.042 1.222-1.336 1.206c-2.237 2.019-3.938 3.55-4.063 5.335-.16 2.274 1.714 3.12 3.133 3.23 1.507.118 2.797-.7 3.59-1.847.697-1.008 1.154-3.179 1.12-5.323-.013-.858-.035-1.95-.052-3.12a25 25 0 0 0 2.488-3.362c.889-1.449 1.841-3.393 2.33-4.907 0 0 .827.007 1.71-.05.283-.018.364.039.312.242-.063.247-1.116 4.242-.155 6.904.657 1.822 2.14 2.408 3.02 2.408 1.028 0 2.013-.765 2.54-1.9q.095.19.203.362c1.49 2.322 4.369 1.819 5.83-.15.33-.444.518-.828.518-.828.313 1.927 1.836 2.522 2.709 2.522.908 0 1.77-.366 2.47-1.995.03.717.076 1.303.148 1.488.045.113.303.255.49.324.832.303 1.68.16 1.994.097.217-.043.386-.214.41-.657.06-1.163.023-3.117.381-4.568.602-2.437 1.163-3.382 1.43-3.85.148-.262.316-.306.322-.028.013.561.041 2.21.274 4.425.171 1.63.4 2.592.575 2.897.502.871 1.121.912 1.625.912.321 0 .992-.087.932-.641-.03-.27.022-1.941.615-4.342.387-1.567 1.033-2.984 1.266-3.502.085-.19.125-.04.124-.01-.05 1.079-.16 4.61.288 6.541.606 2.617 2.36 2.91 2.97 2.91 1.304 0 2.371-.977 2.73-3.545.087-.618-.041-1.095-.425-1.095"
              fill="#90a1b9"
            />
          </svg>
          {/* Add more brand logos here if needed */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
