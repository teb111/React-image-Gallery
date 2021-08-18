import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center content-center  w-auto p-3">
      <h4 className="text-center text-gray-300 tracking-widest">
        Oluwatobiloba &copy; {new Date().getFullYear()}
      </h4>
      <ul>
        <li>
          <ul class="flex justify-center content-center">
            <li className="transition duration-700 ease-in-out pl-2 pr-2 text-gray-200 hover:text-gray-500">
              <a
                href="https://twitter.com/oluwa_toobi"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li className="transition duration-700 ease-in-out pr-2 text-gray-200 hover:text-gray-500">
              <a
                href="https://github.com/teb111"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li className="transition duration-700 ease-in-out text-gray-200 hover:text-gray-500">
              <a
                href="https://www.instagram.com/_t.e_b/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
