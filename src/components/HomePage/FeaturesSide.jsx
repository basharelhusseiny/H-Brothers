import { motion } from "framer-motion";

const FeaturesSection = ({ serviceFeatures, dict }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="w-full lg:w-2/6 bg-white rounded-lg shadow-lg p-4 lg:p-5 xl:p-6 flex flex-col justify-between lg:h-[450px] right-features-panel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <motion.h2
          className="text-lg md:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 text-gray-800 border-b border-gray-400 pb-2 features-title"
          variants={itemVariants}
        >
          {dict.hero.sectionTitle}
        </motion.h2>
        <div className="flex flex-col space-y-5 features-grid ">
          {serviceFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex h-[72px] items-center bg-red-50 shadow-md p-1.5 lg:p-2 rounded-lg hover:shadow-2xl transition-shadow duration-300 feature-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <div className="mx-1.5 lg:mx-2 mt-0.5 icon-wrapper">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs lg:text-sm">
                  {feature.title}
                </h3>
                <p className="text-[10px] lg:text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
