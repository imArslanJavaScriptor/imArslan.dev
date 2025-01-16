import React from "react";
import SectionIdentifier from "./SectionIdentifier";
import { servicesData } from "../utils/data";
import { Icon } from "lucide-react";

function ServicesSection() {
  return (
    <div className="w-full py-[40px] lg:py-[80px]">
      <SectionIdentifier
        heading={"Services"}
        subHeading={
          "Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
        }
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px] lg:mt-[60px]">
        {servicesData.map((card) => (
          <div
            key={card.id}
            className="min-h-[250px] min-w-[250px] flex flex-col gap-4 items-center justify-center rounded-[20px] bg-sectionBg p-[40px] text-center"
          >
            <card.icon className="text-6xl text-foundationOrange" />
            <h3 className="text-foundationOrange text-3xl font-semibold">
              {card.serviceTitle}
            </h3>
            <p className="text-lg font-medium text-greyColor">
              {card.serviceDesc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
