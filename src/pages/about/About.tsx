import PageBanner from "../../components/shared/PageBanner";
import ContactInformation from "../../components/shared/ContactInfomation";
import Container from "../../components/shared/Container";

import AboutSection from "./AboutSection";
import MissionVision from "./MissionVision";

const About = () => {
    return (
      <div>
        
        <PageBanner title="About Us" description="Welcome to Bike Store, your go-to destination for high-quality products at unbeatable prices. 
                We are committed to providing a seamless shopping experience with a wide range of products, secure payments, and fast delivery. 
                Customer satisfaction is our top priority, and we strive to make online shopping easy, reliable, and enjoyable. 
                Shop with confidence and discover the best deals today!"/>
          <Container className="mt-8 mb-5">
         <AboutSection/>
        </Container>
         <MissionVision/>
         <ContactInformation/>
      </div>
    );
};

export default About;