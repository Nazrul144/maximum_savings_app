"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Input } from "../ui/input";

const Register7 = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("Country");

  return (
    <div>
      <div className="lg:w-[803px] lg:h-[761px] mx-auto mt-14 lg:shadow-2xl relative">
        <div className="lg:w-[820px] h-[50px]">
          <Image
            src={"/register2.png"}
            width={802}
            height={50}
            objectFit="cover"
            priority
            alt="header_Image"
          />
        </div>

        <h1 className="font-bold text-4xl mt-10 montserrat-text text-center mb-5">
          Delivery Address
        </h1>
        <h3 className="text-center text-lg montserrat-text mb-6">
          We'll send your membership card here, check to make sure it's <br />{" "}
          correct.
        </h3>

        {/* Form */}
        <div className="lg:w-2xl mx-auto p-4">
          <Input
            className="h-14 !text-lg !text-black bg-[#F0F0F0] rounded-none placeholder:text-black"
            type="email"
            placeholder="Address line 1"
          />{" "}
          <br />
          <Input
            className="h-14 !text-lg !text-black bg-[#F0F0F0] rounded-none placeholder:text-black"
            type="email"
            placeholder="Address line 2 (Optional)"
          />{" "}
          <br />
          <Input
            className="h-14 !text-lg !text-black bg-[#F0F0F0] rounded-none placeholder:text-black"
            type="email"
            placeholder="Town/City"
          />{" "}
          <br />
          {/* Organization Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className=" w-full lg:w-[640px] flex justify-between h-15 bg-[#F0F0F0] text-black"
                  variant="outline"
                >
                  {selectedOrganization}
                  <ChevronDownIcon className="-me-1 opacity-60" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-full "
                side="bottom"
                align="start"
              >
                {countries?.map((country) => (
                  <DropdownMenuItem
                    key={country}
                    className="w-[630px]"
                    onClick={() => setSelectedOrganization(country)}
                  >
                    {country}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <br />
          <Input
            className="h-14 !text-lg !text-black bg-[#F0F0F0] rounded-none placeholder:text-black"
            type="email"
            placeholder="Postcode"
          />
          {/*Back and Next Button*/}
          <div className="flex justify-between items-center mt-12">
            <div>
              <div>
                <Button
                  variant="outline"
                  className="py-5 px-6 text-lg common-text border-2 border-blue-800 cursor-pointer"
                >
                  Back
                </Button>
              </div>
            </div>
            <div>
              <Link
                href={"/register3"}
                className="common-bg py-2.5 px-5 rounded-lg text-white w-28 h-12 flex items-center justify-center gap-1"
              >
                {/* Icon first, then text */}
                <span className="text-lg font-semibold">Next</span>
                <MdKeyboardDoubleArrowRight className="text-2xl mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-blue-800 border-[3px] lg:w-[802px] mx-auto" />
    </div>
  );
};

export default Register7;

// countries.js
export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  // ... all countries
];
