import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLink = () => {
    return (
        <div className="flex items-center gap-x-2">
        <Link
          to="https://www.facebook.com/"
          target="blank"
          className="bg-white border border-themeColor shadow-md text-black p-3 text-lg hover:bg-[#115061] hover:text-white cursor-pointer duration-200 rounded-md"
        >
          <FaFacebookF />
        </Link>
        <Link
          to="https://www.facebook.com/"
          target="blank"
          className="bg-white border border-themeColor shadow-md text-black p-3 text-lg hover:bg-[#115061] hover:text-white cursor-pointer duration-200 rounded-md"
        >
          <FaXTwitter />
        </Link>
        <Link
          to="https://www.facebook.com/"
          target="blank"
          className="bg-white border border-themeColor shadow-md text-black p-3 text-lg hover:bg-[#115061] hover:text-white cursor-pointer duration-200 rounded-md"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://www.facebook.com/"
          target="blank"
          className="bg-white border border-themeColor shadow-md text-black p-3 text-lg hover:bg-[#115061] hover:text-white cursor-pointer duration-200 rounded-md"
        >
          <FaInstagram />
        </Link>
      </div>
    );
};

export default SocialLink;