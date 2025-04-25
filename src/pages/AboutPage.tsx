
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-mcrt-gray pt-20 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MCRT Software</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading software development company specializing in creating tailored digital solutions that drive business growth and operational efficiency.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, MCRT Software began with a simple mission: to deliver high-quality, customized software solutions that truly address our clients' unique business challenges.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of dedicated developers has grown into a comprehensive software development company with expertise spanning Tally ERP customization, mobile app development, and enterprise software solutions.
              </p>
              <p className="text-gray-600">
                Throughout our journey, we've remained committed to our core values of innovation, quality, and client satisfaction. These principles continue to guide our work as we help businesses across various industries navigate their digital transformation.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400" 
                alt="Software Development" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section bg-mcrt-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 text-mcrt-blue">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative software solutions that enhance efficiency, productivity, and growth, while delivering exceptional value and service to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 text-mcrt-blue">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 15L12 7L20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading provider of innovative software solutions, known for our technical expertise, uncompromising quality, and commitment to client success in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Core Values</h2>
          <p className="section-subtitle text-center mx-auto">
            These principles guide our work and define our company culture
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-mcrt-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mcrt-blue">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-mcrt-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mcrt-blue">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our work, ensuring robust, reliable solutions for our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-mcrt-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mcrt-blue">
                  <path d="M14 9L14 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 13L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 5L18 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 17L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-gray-600">
                We embrace change and flexibility, tailoring our approach to each client's unique needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-mcrt-light p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mcrt-blue">
                  <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 21C3 17.134 7.02944 14 12 14C16.9706 14 21 17.134 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600">
                We prioritize our clients' success, building relationships based on trust, transparency and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection title="Ready to Work with Us?" description="Contact our team today to discuss how we can help your business succeed with customized software solutions." />
      
      <Footer />
    </>
  );
};

export default AboutPage;
