import React from "react";
import ServicePage from "@/components/ServicePage";

const TallyERPCustomizationPage = () => {
  return (
    <ServicePage
      title="Tally ERP Customization"
      description="Tailored Tally ERP solutions to fit your unique business needs, with seamless integrations and expert support."
      features={[
        "Customized invoice and report formats",
        "Tally module enhancements",
        "Integration with third-party systems",
        "User-specific dashboards and controls",
        "Automation of repetitive tasks",
        "Advanced security features",
      ]}
      benefits={[
        "Fits your exact business process",
        "Boosted efficiency and reduced errors",
        "Better user experience",
        "Increased system adaptability",
        "Higher productivity with automation",
        "Strong data security and control",
      ]}
    />
  );
};

export default TallyERPCustomizationPage;
