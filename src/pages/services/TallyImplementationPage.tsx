
import React from "react";
import ServicePage from "@/components/ServicePage";

const TallyImplementationPage = () => {
  return (
    <ServicePage
      title="Tally Implementation Services"
      description="Expert Tally ERP implementation services tailored to your business needs. We ensure smooth deployment, training, and support for optimal business operations."
      features={[
        "Complete Tally ERP setup and configuration",
        "Custom implementation based on business requirements",
        "Data migration from existing systems",
        "User training and documentation",
        "Post-implementation support",
        "Performance optimization"
      ]}
      benefits={[
        "Streamlined business processes",
        "Improved operational efficiency",
        "Accurate financial reporting",
        "Reduced manual work",
        "Better decision making with real-time data",
        "Enhanced productivity"
      ]}
    />
  );
};

export default TallyImplementationPage;
