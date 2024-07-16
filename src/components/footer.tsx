import Image from "next/image";
import UsaFlagIcon from "@/assets/images/footer-images/usa-flag.png";
import CardGrid from "@/assets/images/footer-images/card-grid.png";
import InstagramIcon from "@/assets/images/footer-images/instagram-icon.png";
import LinkedinIcon from "@/assets/images/footer-images/linkedin-icon.png";
import Accordion from "@/utils/accordion";
import { AccordionData } from "@/typings/accordion";

function Footer() {

  const footerLinks: Array<AccordionData> = [
    {
      id: 1,
      title: "mettā muse",
      isOpen: false,
      links: [
        "About Us",
        "Stories",
        "Artisans",
        "Boutiques",
        "Contact Us",
        "EU Compliances Docs"
      ]
    },
    {
      id: 2,
      title: "QUICK LINKS",
      isOpen: false,
      links: [
        "Orders & Shipping",
        "Join/Login as a Seller",
        "Payment & Pricing",
        "Return & Refunds",
        "FAQs",
        "Privacy Policy",
        "Terms & Conditions"]
    },
    {
      id: 3,
      title: "FOLLOW US",
      isOpen: false,
      links: []
    }
  ];


  return (
    <div className="p-7 sm:p-14 sm:pb-10 w-full h-auto bg-black text-white">
      <div className="border-b flex flex-col sm:flex-row justify-between">
        <div className="flex w-full sm:w-6/12 flex-col items-start gap-5 sm:gap-7 border-b pb-7 sm:p-0 sm:border-none">
          <h1 className="text-2xl font-bold uppercase">Be the first to know</h1>
          <p>Sign up for updates from mettā muse.</p>
          <div className="h-[48px] w-full"><input className="h-full w-8/12 px-4 mr-1 text-black" type="email" placeholder="Enter your e-mail..." /> <button className="h-[48px] w-1/4 rounded-sm opacity-50 text-sm border border-[#BFC8CD] text-[#BFC8CD]">SUBSCRIBE</button></div>
        </div>

        <div className="flex flex-col w-full sm:w-5/12">
          <div className="flex w-full flex-col items-start gap-2 mb-7 border-b py-7 sm:p-0 sm:border-none">
            <h1 className="text-2xl font-bold uppercase">Contact Us</h1>
            <div className="flex flex-row sm:flex-col gap-2 sm:items-start items-center">
              <p>+44 221 133 5360</p>
              <span className="h-[10px] w-[10px] rounded-2xl bg-white inline-block sm:hidden"></span>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-2 mb-7">
            <h1 className="text-2xl font-bold uppercase">Currency</h1>

            <p><Image width={24} height={24} src={UsaFlagIcon} alt="USA Flag Icon" priority className="inline" /> <span className="h-[10px] w-[10px] rounded-2xl bg-white inline-block sm:hidden mx-1"></span> USD</p>
            <p className="text-md hidden sm:block">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col sm:flex-row justify-between pt-7 sm:py-14">
        <div className="flex w-full sm:w-6/12 items-start gap-5 sm:gap-7 border-b pb-5 sm:p-0 sm:border-none">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-5">mettā muse</h1>
            <ul className="flex gap-3 flex-col text-lg font-normal">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Stories</li>
              <li className="cursor-pointer">Artisans</li>
              <li className="cursor-pointer">Boutiques</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">EU Compliances Docs</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-5">QUICK LINKS</h1>
            <ul className="flex gap-3 flex-col text-lg font-normal">
              <li className="cursor-pointer">Orders & Shipping</li>
              <li className="cursor-pointer">Join/Login as a Seller</li>
              <li className="cursor-pointer">Payment & Pricing</li>
              <li className="cursor-pointer">Return & Refunds</li>
              <li className="cursor-pointer">FAQs</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-5/12">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-5 uppercase">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Image priority src={InstagramIcon} className="w-[32px] h-[32px] cursor-pointer" alt="instagram" />
              <Image priority src={LinkedinIcon} className="w-[32px] h-[32px] cursor-pointer" alt="linkedin" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-5">mettā muse ACCEPTS</h3>
            <Image priority src={CardGrid} className="w-[375px] h-[35px]" alt="cards" />
          </div>
        </div>
      </div>

      <div className="w-full flex sm:hidden pt-[35px]">
        <Accordion data={footerLinks} />
      </div>

      <div className="w-full text-center mt-5 sm:m-0">Copyright © 2024 mettamuse. All rights reserved.</div>
    </div>
  )
}

export default Footer;