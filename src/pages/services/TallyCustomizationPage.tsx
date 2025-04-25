
import React from "react";
import ServicePage from "@/components/ServicePage";

const TallyCustomizationPage = () => {
  return (
    <ServicePage
      title="Tally Customization Services"
      description="Custom Tally solutions designed to match your unique business requirements, enhancing functionality and improving user experience."
      features={[
        "Custom report development",
        "TDL programming",
        "Business process automation",
        "Custom invoice formats",
        "Specialized business logic implementation",
        "User interface customization"
      ]}
      benefits={[
        "Tailored to your business needs",
        "Improved workflow efficiency",
        "Better reporting capabilities",
        "Enhanced user productivity",
        "Streamlined operations",
        "Competitive advantage"
      ]}
    />
  );
};

export default TallyCustomizationPage;
