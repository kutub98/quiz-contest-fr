"use client";

import { Building, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-blue-900 mt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/Asset/prducts/footer.avif"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-14 flex  sm:justify-between ">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 dark:text-[#f25b29]">
            কুইজ প্রতিযোগীতা
          </h4>

        </div>

        <div>
          <h1>Quiz Contest</h1>
        </div>

        {/* Links - Support */}
        {/* <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">Support</h4>
          <ul className="space-y-2 text-sm text-gray-900">
            <li>
              <a
                href="/contact"
                className="hover:text-blue-800 dark:text-[#f25b29]"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-blue-800 dark:text-[#f25b29]"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-blue-800 dark:text-[#f25b29]"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div> */}

        {/* Contact Info */}
        {/* <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">
            Get in Touch
          </h4>
          <p className="text-sm flex items-start gap-2 dark:text-[#f25b29]  text-gray-900 mb-2">
            <Mail className="w-4 h-4 text-[#f25b29]" /> support@techelement.com
          </p>
          <p className="text-sm text-gray-800 mb-2 flex gap-2 dark:text-[#f25b29] items-start">
            {" "}
            <PhoneCall className="w-4 h-4 text-[#f25b29]" /> +1 (800) 123-4567
          </p>
          <p className="text-sm text-gray-800 flex gap-2 dark:text-[#f25b29] items-start">
            <Building className="w-8 h-8 text-[#f25b29]" /> Level D-15, Lily
            Pond Center, 3 RK Mission Road, Motijheel, Dhaka-1203
          </p>
        </div> */}
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} কুইজ প্রতিযোগীতা Inc. All rights reserved.
      </div>
    </footer>
  );
}
