import { Link } from "react-router-dom";
import Container from "../../shared/Container"
import SocialLink from "../../shared/SocialLink"
import Title from "../../shared/Title"
import logo from '../../../assets/images/logo/logo.webp'
import {navigation} from '../../../constant/index'
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
    return (
        <div className="bg-lightBg py-10 lg:py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col items-start gap-y-5">
            <Link to={"/"}>
              <img src={logo} alt="logo"className="w-24" />
            </Link>
            <p>
              We are a team of designers and developers that create high quality
              WordPress
            </p>
            <SocialLink />
          </div>
          <div>
            <Title>My Account</Title>
            <div className="mt-3 flex flex-col gap-y-2">
              {navigation?.map((item) => (
                <Link
                  key={item?.title}
                  to={item?.href}
                  className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
                >
                  <GoDotFill size={10} />
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Title>Information</Title>
            <div className="mt-3 flex flex-col gap-y-2">
              {navigation?.map((item) => (
                <Link
                  key={item?.title}
                  to={item?.href}
                  className="flex items-center gap-x-2 text-gray-700 hover:text-[#115061] duration-200 font-medium"
                >
                  <GoDotFill size={10} />
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Title>Talk to Us</Title>
            <div className="mt-3">
              <div>
                <p className="text-sm">Got Questions? Call us</p>
                <Title>+8801642287450</Title>
              </div>
              <div className="mt-3">
                <p className="text-base flex items-center gap-x-3 text-gray-600">
                  <BsEnvelopeAt /> shofy@suppert.com
                </p>
                <p className="text-base flex items-center gap-x-3 text-gray-600">
                  <GrLocation /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Footer;