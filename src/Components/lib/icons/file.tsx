<div className="menuWrapper">
<nav className="relative  lg:block">
  <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
        Home
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-0 top-[4px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Homepage 1"
            href="/">
            Homepage
          </a>
        </li>
        {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
        <a
          className="hover:text-accent text-accent2 pr-5 relative block"
          title="Homepage 2"
          href="/home2">
          Homepage 2
        </a>
      </li> */}
      </ul>
    </li>
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
        Blog
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-0 top-[4px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Blog Style 1"
            href="/blog">
            Blog Style
          </a>
        </li>
        {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
        <a
          className="hover:text-accent text-accent2 pr-5 relative block"
          title="Blog Style 2"
          href="/blog2">
          Blog Style 2
        </a>
      </li> */}
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Blog Detail"
            href="/blog/:Id">
            Blog Detail
          </a>
        </li>
      </ul>
    </li>
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
        Portfolio
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-0 top-[4px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Portfolio Style 1"
            href="/portfolio">
            Portfolio Style
          </a>
        </li>
        {/* <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
        <a
          className="hover:text-accent text-accent2 pr-5 relative block"
          title="Portfolio Style 2"
          href="/portfolio2">
          Portfolio Style 2
        </a>
      </li>
      <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
        <a
          className="hover:text-accent text-accent2 pr-5 relative block"
          title="Portfolio Style 3"
          href="/portfolio3">
          Portfolio Style 3
        </a>
      </li> */}
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Portfolio Detail"
            href="/portfolio/:Id">
            Portfolio Detail
          </a>
        </li>
      </ul>
    </li>
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
        Pages
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-0 top-[4px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Plans"
            href="/plans">
            Plans
          </a>
        </li>
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Error Page"
            href="/404">
            Error Page
          </a>
        </li>
      </ul>
    </li>
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
        Service
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-0 top-[4px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
      <ul className="children relative lg:absolute opacity-0 top-full left-0 group-hover:opacity-100 lg:invisible lg:group-hover:visible before:absolute before:inset-0 before:bg-gray before:rounded-0 before:lg:rounded-[1.25rem] before:opacity-70 before:z-[-1] bg-blend-multiply rounded-0 lg:rounded-[1.25rem] bg-no-repeat bg-center bg-cover z-[1] bg-gray p-6 flex flex-col gap-3 divide-y divide-[rgba(0,0,0,.15)]">
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Service"
            href="/service">
            Service
          </a>
        </li>
        <li className="relative text-[.9375rem] font-Poppins font-semibold capitalize pt-2">
          <a
            className="hover:text-accent text-accent2 pr-5 relative block"
            title="Service Detail"
            href="/service/:Id">
            Service Detail
          </a>
        </li>
      </ul>
    </li>
    <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
      <a
        className="group-hover:text-accent text-accent2 pr-5 relative block"
        title="Contact"
        href="/contact">
        Contact
      </a>
    </li>
  </ul>
</nav>
</div>