import { motion } from "framer-motion";
import about from "../../assets/images/about/about.jpg";

const AboutSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-20 py-10">
            {/* Image Section with Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={about}
                    alt="About Us"
                />
            </motion.div>

            {/* Content Section with Fade-in Animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full md:w-1/2 text-center md:text-left"
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Company Overview</h1>
                <p className="text-md text-gray-600 leading-relaxed">
                    Welcome to <span className="font-semibold text-gray-900">Bike Store</span>, your trusted destination for high-quality products at unbeatable prices. Founded in <span className="font-semibold">[Year]</span>, we aim to provide a seamless and enjoyable shopping experience with a focus on customer satisfaction, reliability, and affordability.
                </p>
                <p className="text-md text-gray-600 leading-relaxed mt-4">
                    We offer a diverse range of <span className="font-semibold">product categories, e.g., electronics, fashion, home essentials, etc.</span>, ensuring that our customers find everything they need in one place. Our commitment to quality, secure transactions, and fast delivery makes us a preferred choice for online shoppers.
                </p>
                <p className="text-md text-gray-600 leading-relaxed mt-4">
                    Whether you're looking for the latest trends, top-rated products, or unbeatable deals, <span className="font-semibold text-gray-900">Bike Store</span> is here to serve you. Join us and experience the future of online shopping today!
                </p>
            </motion.div>
        </section>
    );
};

export default AboutSection;
