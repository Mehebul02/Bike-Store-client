import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission & Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                    <Target className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                        At <span className="font-semibold text-gray-900">Bike Store</span>, our mission is to provide high-quality products at unbeatable prices, ensuring a seamless and enjoyable shopping experience. We focus on **customer satisfaction, trust, and innovation** to enhance the online shopping journey.
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                    <Eye className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                        Our vision is to become a globally recognized e-commerce brand that **sets new standards in quality, affordability, and service**. We strive to create a marketplace where customers feel confident and excited about shopping online.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
