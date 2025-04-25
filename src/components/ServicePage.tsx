
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

const ServicePage = ({ title, description, features, benefits }: ServicePageProps) => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Thank you for your interest! We'll get back to you soon.");
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-mcrt-gray pt-20 pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mcrt-blue flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-mcrt-gray py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Generation Form */}
        <section className="py-16">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started with {title}</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input {...form.register("name")} placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input {...form.register("email")} type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input {...form.register("phone")} placeholder="Your phone number" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  {...form.register("message")} 
                  placeholder="Tell us about your requirements"
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </>
  );
};

export default ServicePage;
