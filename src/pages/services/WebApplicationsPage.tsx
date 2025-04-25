
import React from "react";
import ServicePage from "@/components/ServicePage";

const WebApplicationsPage = () => {
  return (
    <ServicePage
      title="Web Applications"
      description="Custom web applications built with modern technologies to help your business grow and operate efficiently in the digital age."
      features={[
        "Custom web application development",
        "Progressive Web Apps (PWA)",
        "Responsive design",
        "API development",
        "Database design",
        "Cloud deployment"
      ]}
      benefits={[
        "Improved business efficiency",
        "Enhanced customer experience",
        "Better data management",
        "Scalable solutions",
        "Cross-platform compatibility",
        "Reduced operational costs"
      ]}
    />
  );
};

export default WebApplicationsPage;
