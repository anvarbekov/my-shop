import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-2 px-4 md:px-12 fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"./"}>
        <Image
          src={"https://svgsilh.com/svg/2010729.svg"}
          alt="Logo"
          width={50}
          height={40}
        />
      </Link>
      <div className="flex items-center space-x-2.5">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home Page</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900">All Products</Link>
        </nav>
        <Link href={'/shopping-cart'}>
        <button className="button text-white bg-blue-600 hover:border border-blue-600 hover:bg-transparent hover:text-black">
          My Bag
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
