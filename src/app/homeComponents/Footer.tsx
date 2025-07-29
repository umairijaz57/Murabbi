import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface Props {
  page?: string;
}

const Footer = (props: Props) => {
  return (
    <footer className={` bg-blue-600 text-white `}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0 flex flex-col place-items-center justify-center gap-4 ">
            <a href="/" className="flex items-center  ">
              <Image src="/logo-footer.png" alt="" width={120} height={120} />
            </a>
            <div>
              <div className="flex space-x-6 sm:justify-center ">
                <a
                  href="https://www.facebook.com/profile.php?id=61558689572370"
                  target="_blank"
                  className=" flex justify-center place-items-center h-6 w-6 rounded-full bg-white "
                >
                  <FaFacebookF className="text-[1rem] text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/murabbi.io/"
                  target="_blank"
                  className=" flex justify-center place-items-center h-6 w-6 rounded-full bg-white "
                >
                  <FaInstagram className="text-[1.1rem] text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/murabbi/"
                  target="_blank"
                  className=" flex justify-center place-items-center h-6 w-6 rounded-full bg-white "
                >
                  <FaLinkedinIn className="text-[1.1rem] text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-20 md:flex-row md:mt-4">
            <div>
              <ul className=" font-medium text-center md:text-left">
                <li className="mb-2 mt-6 md:mt-0 md:mb-4 text-xl font-bold ">
                  <a href="/aboutus" className="hover:underline">
                    About Us
                  </a>
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
            </div>
            <div>
              <ul className=" font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold ">
                  <a href="/resources" className="hover:underline">
                    Resources
                  </a>
                </li>
                <Link href="/news">
                  <li className="mb-4 text-sm">News</li>
                </Link>
                <Link href="/news">
                  <li className="mb-4 text-sm">Blog</li>
                </Link>
                <Link href="/aboutus#faq">
                  <li className="text-sm">FAQs</li>
                </Link>
              </ul>
            </div>

            <div>
              <ul className=" font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold ">
                  <a href="/offer" className="hover:underline">
                    What We Offer
                  </a>
                </li>
                <Link href="/whatweoffer/robotics">
                  <li className="mb-4 text-sm">Robotics</li>
                </Link>
                <Link href="/whatweoffer/artificialintelligence">
                  <li className="mb-4 text-sm">Artificail Intelligence</li>
                </Link>
                <Link href="/whatweoffer/cybersecurity">
                  <li className="text-sm mb-4">Cyber Security</li>
                </Link>
                <Link href="/whatweoffer/gamedev">
                  <li className="text-sm">Game Development</li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className=" font-medium text-center md:text-left">
                <li className="mb-2 mt-8 md:mt-0 md:mb-4 text-xl font-bold ">
                  <a href="/contactus" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-4 text-sm">+92 333 1555665</li>
                <li className="mb-4 text-sm">
                  {" "}
                  <Link
                    href="mailto:murabbi.socials@gmail.coms"
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
          {/* <span className="text-sm t sm:text-center ">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
