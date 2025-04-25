
import React from "react";
import ServicePage from "@/components/ServicePage";

const TallyIntegrationPage = () => {
  return (
    <ServicePage
      title="Tally Integration Services"
      description="Seamlessly integrate Tally with other business applications to create a unified business ecosystem that enhances productivity and data accuracy."
      features={[
        "Integration with e-commerce platforms",
        "API development for Tally connectivity",
        "Real-time data synchronization",
        "Custom integration solutions",
        "Third-party software integration",
        "Automated data flow setup"
      ]}
      benefits={[
        "Automated data exchange",
        "Reduced manual data entry",
        "Improved data accuracy",
        "Real-time business insights",
        "Enhanced workflow efficiency",
        "Seamless system connectivity"
      ]}
    />
  );
};

export default TallyIntegrationPage;
