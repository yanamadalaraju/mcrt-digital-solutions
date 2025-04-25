
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const MobileAppPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-mcrt-gray pt-20 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Custom mobile applications designed to enhance user experience, streamline business processes, and drive customer engagement.
          </p>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Innovative Mobile Solutions</h2>
              <p className="text-gray-600 mb-4">
                MCRT Software specializes in creating custom mobile applications that transform how businesses operate and engage with their customers. Our expert development team builds intuitive, feature-rich apps for iOS and Android platforms.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need a consumer-facing app or an enterprise solution, we focus on delivering high-performance applications with exceptional user experiences that help achieve your business goals.
              </p>
              <div className="mt-6">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Discuss Your App Idea</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400" 
                alt="Mobile App Development" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-mcrt-light">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Mobile App Services</h2>
          <p className="section-subtitle text-center mx-auto">
            End-to-end mobile application development services to bring your ideas to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Native App Development</h3>
              <p className="text-gray-600">
                High-performance native applications for iOS and Android platforms with platform-specific features and optimized user experiences.
              </p>
            </div>
            
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform Development</h3>
              <p className="text-gray-600">
                Cost-effective solutions that work across multiple platforms using frameworks like React Native or Flutter with a single codebase.
              </p>
            </div>
            
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Engaging, intuitive interfaces designed to provide exceptional user experiences and maximize user retention.
              </p>
            </div>
            
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">API Development & Integration</h3>
              <p className="text-gray-600">
                Robust API development to connect your mobile app with existing systems, databases, and third-party services.
              </p>
            </div>
            
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Maintenance & Updates</h3>
              <p className="text-gray-600">
                Ongoing support, maintenance, and updates to ensure your app remains compatible with the latest OS versions and devices.
              </p>
            </div>
            
            <div className="card">
              <div className="text-mcrt-blue mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Testing & Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive testing across devices and operating systems to ensure your app is bug-free and performs optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Our App Development Process</h2>
          <p className="section-subtitle text-center mx-auto">
            A structured approach to turning your app idea into reality
          </p>
          
          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mcrt-light"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-8 text-right md:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      We begin by understanding your requirements, target audience, and business goals to create a detailed project plan.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row md:items-center mt-12">
                <div className="md:w-1/2 md:pl-8 md:order-last">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue">
                    <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">
                      Our designers create intuitive, engaging interfaces that provide exceptional user experiences and align with your brand.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row md:items-center mt-12">
                <div className="md:w-1/2 md:pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-gray-600">
                      Our skilled development team builds your application using the latest technologies and following best practices.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row md:items-center mt-12">
                <div className="md:w-1/2 md:pl-8 md:order-last">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue">
                    <h3 className="text-xl font-bold mb-2">Testing & QA</h3>
                    <p className="text-gray-600">
                      Rigorous testing across devices and platforms to ensure your app is bug-free, secure, and performs optimally.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="flex flex-col md:flex-row md:items-center mt-12">
                <div className="md:w-1/2 md:pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue md:border-l-0 md:border-r-4">
                    <h3 className="text-xl font-bold mb-2">Deployment & Launch</h3>
                    <p className="text-gray-600">
                      We handle the app store submission process and ensure a smooth launch to your target audience.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
              
              {/* Item 6 */}
              <div className="flex flex-col md:flex-row md:items-center mt-12">
                <div className="md:w-1/2 md:pl-8 md:order-last">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-mcrt-blue">
                    <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
                    <p className="text-gray-600">
                      Ongoing maintenance, updates, and support to ensure your app continues to perform well and remains compatible.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-mcrt-blue rounded-full w-6 h-6 border-4 border-mcrt-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Build Your Custom Mobile App?" 
        description="Contact us today to discuss your mobile app idea and discover how we can help bring it to life."
        buttonText="Start Your Project"
        bgColor="bg-mcrt-teal"
      />
      
      <Footer />
    </>
  );
};

export default MobileAppPage;
