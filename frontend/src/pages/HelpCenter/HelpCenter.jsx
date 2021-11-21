import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import FAQ from "../../components/FAQ/FAQ";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";

export default function HelpCenter() {
  return (
    <div className="">
      <div className="flex gap-10">
        <div className="w-1/2 pb-6 relative">
          <SectionHeaderBackNav pageName="help center" />
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
        </div>
        <div className="w-1/2 relative pb-6">
          <p className="text-white text-[32px] tex-border">Contact Us</p>
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-1/2">
          <FAQ />
        </div>
        <div className="w-1/2">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
