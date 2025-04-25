
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mcrt-light via-white to-blue-50 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mcrt-dark leading-tight">
                Enterprise Solutions <br />
                <span className="text-mcrt-blue">Tailored for Your Business</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                MCRT Software specializes in Tally ERP customization, mobile app development, and enterprise solutions that drive business growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="btn-primary text-base">
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
                <Button asChild className="btn-outline text-base">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400" 
                alt="Enterprise Software Development" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a comprehensive range of digital solutions to help businesses streamline operations and achieve growth.
            </p>
          </div>
          
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
              title="Enterprise Solutions"
              description="End-to-end enterprise software solutions that integrate with your existing systems and improve efficiency."
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              link="/services"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section bg-mcrt-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="section-title">Why Choose MCRT Software?</h2>
              <div className="space-y-6 mt-6">
                <div className="flex gap-4">
                  <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expertise & Experience</h3>
                    <p className="text-gray-600">
                      Our team brings years of industry experience and technical expertise to every project we undertake.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">
                      We don't believe in one-size-fits-all. Each solution is tailored to your specific business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Our commitment doesn't end at deployment. We provide ongoing support to ensure your solutions continue to perform optimally.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="btn-primary mt-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
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

export default Index;
