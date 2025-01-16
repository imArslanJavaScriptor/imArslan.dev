import React from "react";

function SectionIdentifier({heading, subHeading, customStyles}) {
  return (
    <div className={`w-full text-center ${customStyles}`}>
        {heading && (
            <h2 className="sectionHeading">{heading}</h2>
        )}

        {subHeading && (
            <p className="sectionSubHeading mt-1">{subHeading}</p>
        )}


    </div>
  )
}

export default SectionIdentifier;
