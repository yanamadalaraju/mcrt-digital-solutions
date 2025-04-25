
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const QuotePage = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container-custom max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Get a Quote</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
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
              <Button type="submit" className="w-full">Submit Quote Request</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuotePage;
