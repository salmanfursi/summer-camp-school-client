
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaSnapchat,
  FaLinkedin,
  
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h2 className="text-cyan-600 text-lg font-medium mb-4">About Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
          Welcome to our dance school! We are so excited to have you join our community of dancers. We committed to providing you with a fun, safe, and supportive environment where you can learn and grow as a dancer. We offer a variety of classes for all levels. We hope you enjoy your time at our dance school!
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-cyan-600 text-lg font-medium mb-4">Latest</h2>
          <ul className="text-gray-400 text-sm leading-loose">
            <li>
              <Link to="">privat API</Link>
            </li>
            <li>
              <Link to="">easy docs</Link>
            </li>
            <li>
              <Link to="">better guide</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition-colors">
                natural environment
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-cyan-600 text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            555 Main St.
            <br />
            Washington, USA 12123
            <br />
            (333) 444-2233
            <br />
            washington@dance.com
          </p>
        </div>
        <div className="col-span-1  md:justify-end">
          <h2 className="text-cyan-600 text-lg font-medium mb-1">Follow Us</h2>{" "}
          <br />
          <ul className="">
            <li>
              <a
                href="#"
                className="text-blue-500 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-white transition-colors"
              >
                <FaSnapchat />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Washington dance school. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
