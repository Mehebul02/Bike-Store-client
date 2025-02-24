import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInformation = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Have questions or need assistance? Get in touch with us!
                </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {/* Email */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                    <Mail className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <a
                        href="mailto:support@yourstore.com"
                        className="text-md text-blue-500 mt-1 hover:underline"
                    >
                        support@yourstore.com
                    </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                    <Phone className="w-10 h-10 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <a
                        href="tel:+1234567890"
                        className="text-md text-green-500 mt-1 hover:underline"
                    >
                        +1 234 567 890
                    </a>
                </motion.div>

                {/* Address */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                    <MapPin className="w-10 h-10 text-red-600 mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-md text-gray-600 mt-1">123 Main Street, City, Country</p>
                </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Get in Touch
                </motion.a>
            </div>
        </section>
    );
};

export default ContactInformation;
