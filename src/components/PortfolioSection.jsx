import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "../utils/data";

const PortfolioSection = () => {
  const tabs = ["All", "Website Design", "App Mobile Design", "App Desktop", "Branding"];
  

  const [selectedTab, setSelectedTab] = useState("All");

  const filteredItems =
    selectedTab === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedTab);

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-center text-4xl font-bold mb-6">Portfolio</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-md ${
              selectedTab === tab ? "bg-foundationOrange text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="bg-gray-900 rounded-lg p-4 shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.title} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
