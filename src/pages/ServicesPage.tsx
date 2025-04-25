
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

const ServicesPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-mcrt-gray pt-20 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to enhance your business operations and drive growth.
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Tally ERP Customization"
              description="Custom Tally ERP solutions tailored to your business needs, with seamless integration and support services."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              link="/services/tally-erp"
            />
            
            <ServiceCard
              title="Mobile App Development"
              description="Custom mobile applications that enhance customer engagement and streamline business operations."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                </svg>
              }
              link="/services/mobile-app"
            />
            
            <ServiceCard
              title="Web Application Development"
              description="Responsive, user-friendly web applications that provide seamless experiences across all devices."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 8H22" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              link="/services"
            />
            
            <ServiceCard
              title="Custom Software Development"
              description="Tailor-made software solutions designed to address your specific business requirements."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15.5L15.5 12L12 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              link="/services"
            />
            
            <ServiceCard
              title="System Integration"
              description="Seamless integration of different software systems to improve data flow and operational efficiency."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17.196 9C17.4105 9.82814 17.9351 10.5437 18.6468 11.0192C19.3586 11.4947 20.2155 11.6948 21.054 11.5799C21.8925 11.4649 22.6599 11.0427 23.2205 10.391C23.7811 9.73923 24.0969 8.90145 24.0969 8.04C24.0969 7.17855 23.7811 6.34077 23.2205 5.68905C22.6599 5.03733 21.8925 4.61513 21.054 4.50018C20.2155 4.38523 19.3586 4.58535 18.6468 5.06084C17.9351 5.53633 17.4105 6.25186 17.196 7.08" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6.80402 15C6.58954 15.8281 6.06488 16.5437 5.35315 17.0192C4.64142 17.4947 3.78449 17.6948 2.94599 17.5799C2.10749 17.4649 1.34009 17.0427 0.77951 16.391C0.218923 15.7392 -0.0969238 14.9014 -0.0969238 14.04C-0.0969238 13.1786 0.218923 12.3408 0.77951 11.689C1.34009 11.0373 2.10749 10.6151 2.94599 10.5002C3.78449 10.3852 4.64142 10.5854 5.35315 11.0608C6.06488 11.5363 6.58954 12.2519 6.80402 13.08" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              link="/services"
            />
            
            <ServiceCard
              title="IT Consulting"
              description="Expert advice and guidance to help you make informed decisions about your IT strategy and investments."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              link="/services"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-mcrt-gray">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Service Process</h2>
          <p className="section-subtitle text-center mx-auto">
            We follow a streamlined approach to ensure your project is delivered efficiently and effectively
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 -left-4 bg-mcrt-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your business, requirements, and goals through detailed consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 -left-4 bg-mcrt-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Planning</h3>
              <p className="text-gray-600">
                We create a detailed roadmap with timelines, requirements, and deliverables for your project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 -left-4 bg-mcrt-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Development</h3>
              <p className="text-gray-600">
                Our expert team develops your solution with regular updates and quality checks throughout.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 -left-4 bg-mcrt-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Deployment & Support</h3>
              <p className="text-gray-600">
                We implement your solution and provide ongoing support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </>
  );
};

export default ServicesPage;
