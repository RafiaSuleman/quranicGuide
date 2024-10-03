"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Image from "next/image";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+92 323 4533057",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "qarionline@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "abc",
  },
];

const Contact = () => {
  return (
   
      <div className="container mx-auto bg-[#F5F7FA] ">
        <div className="flex flex-col xl:flex-row gap-[30px] py-6">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-white rounded-xl "
            >
              <h3 className="text-4xl ">Let chat, Reach Out to Us</h3>
              <p className="">
                Reach out for questions, support, or feedback. Our team is here
                to assist you with any inquiries or concerns you have.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Name" />

                <Input type="city" placeholder="City" />

                <Input type="email" placeholder="Email address" />

                <Input type="phone" placeholder="Phone number" />
              </div>

              <Textarea
                className="h-[200px]"
                placeholder="Let us message here"
              ></Textarea>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3"
                >
                  Accept terms and conditions
                </label>
              </div>

              <Button size="default" className="max-w-40 flex items-center bg-[#D4A017] hover:bg-[#F8D479]">
                {" "}
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex flex-col items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                <div className="flex flex-col gap-5 bg-white px-5 py-4">   
              {info.map((item, index) => {
                return (
                    <div  key={index} className="flex gap-4 rounded-lg bg-[#F5F7FA] px-6 py-3">
                    <div className="w-[42px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#d4a017] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <div >
                        {" "}
                        <p className="text-primary-foreground">{item.title}</p>
                        <h3 className="text-xl text-primary-foreground">{item.description}</h3>
                      </div>
                    </div>
                    </div>
                );
              })}
            </div>
          
          
            
          </div>
        </div>
      </div>

  );
};

export default Contact;
