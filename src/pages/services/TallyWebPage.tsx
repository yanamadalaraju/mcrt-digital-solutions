
import React from "react";
import ServicePage from "@/components/ServicePage";

const TallyWebPage = () => {
  return (
    <ServicePage
      title="Tally on Web"
      description="Access your Tally data anywhere, anytime with our secure web-based solutions. Perfect for businesses requiring remote access and real-time collaboration."
      features={[
        "Remote Tally access",
        "Cloud-based solutions",
        "Multi-user collaboration",
        "Secure data access",
        "Real-time synchronization",
        "Mobile compatibility"
      ]}
      benefits={[
        "Work from anywhere",
        "Improved collaboration",
        "Real-time data access",
        "Reduced IT infrastructure costs",
        "Enhanced data security",
        "Better business continuity"
      ]}
    />
  );
};

export default TallyWebPage;
