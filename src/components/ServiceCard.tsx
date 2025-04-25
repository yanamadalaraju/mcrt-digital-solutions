
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="card group">
      <div className="text-mcrt-blue mb-4 p-3 bg-mcrt-light inline-block rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-mcrt-blue hover:text-mcrt-teal font-medium"
      >
        Learn More <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
      </Link>
    </div>
  );
};

export default ServiceCard;
