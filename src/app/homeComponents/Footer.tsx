import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface Props {
  page?: string;
}

const Footer = (props: Props) => {
  return (
    <footer className="bg-blue-600 text-white z-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col place-items-center justify-center gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo-footer.png" alt="Murabbi Logo" width={120} height={120} />
            </Link>
            <div>
              <div className="flex space-x-6 sm:justify-center">
                <a
                suppressHydrationWarning
                  href="https://www.facebook.com/profile.php?id=61558689572370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center place-items-center h-6 w-6 rounded-full bg-white"
                >
                  <FaFacebookF className="text-[1rem] text-blue-600" />
                </a>
                <a
                suppressHydrationWarning
                  href="https://www.instagram.com/murabbi.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center place-items-center h-6 w-6 rounded-full bg-white"
                >
                  <FaInstagram className="text-[1.1rem] text-blue-600" />
                </a>
                <a
                suppressHydrationWarning
                  href="https://www.linkedin.com/company/murabbi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center place-items-center h-6 w-6 rounded-full bg-white"
                >
                  <FaLinkedinIn className="text-[1.1rem] text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-20 md:flex-row md:mt-4">
            {/* <div>
              <ul className="font-medium text-center md:text-left">
                <li className="mb-2 mt-6 md:mt-0 md:mb-4 text-xl font-bold">
                  <Link href="/aboutus" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <Link href="/aboutus#teams-section">
                  <li className="mb-4 text-sm">Our Team</li>
                </Link>
                <Link href="/aboutus#history-section">
                  <li className="mb-4 text-sm">Our History</li>
                </Link>
                <Link href="/aboutus#partners-section">
                  <li className="text-sm">Partners</li>
                </Link>
              </ul>
            </div> */}
            <div>
              <ul className="font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold">
                  <h1 className="hover:underline hover:cursor-pointer">
                    Resources
                  </h1>
                </li>
                <Link href="/newsitems">
                  <li className="mb-4 text-sm">News</li>
                </Link>
                <Link href="/newsitems">
                  <li className="mb-4 text-sm">Blog</li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold">
                  <Link href="/" className="hover:underline">
                    Links
                  </Link>
                </li>
                <Link href="/aboutus">
                  <li className="mb-4 text-sm">About</li>
                </Link>
                <Link href="/services/zerocodeai">
                  <li className="mb-4 text-sm">Zero Code AI</li>
                </Link>
                <Link href="/contactus">
                  <li className="text-sm mb-4">Contact us </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold">
                  <Link href="/contactus" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4 text-sm">+92 333 1555665</li>
                <li className="mb-4 text-sm">
                  <Link
                    href="mailto:murabbi.socials@gmail.com"
                    className="underline"
                  >
                    <span>murabbi.socials@gmail.com</span>
                  </Link>
                </li>
                <li className="text-sm">
                  NUST Sector H-12, <br /> Islamabad, Pakistan
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              Murabbi
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;