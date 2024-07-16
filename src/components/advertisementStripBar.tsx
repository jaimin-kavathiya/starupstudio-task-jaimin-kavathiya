import Image from "next/image";
import OfferIcon from "@/assets/images/header-icons/offer-icon.png";

function AdvertisementStripBar() {
  return (
    <div className="bg-black min-w-full flex justify-around py-2">
      <div className="text-[#EB4C6B] flex items-center gap-2 text-[12px]">
        <Image
          className="w-[16px] h-[16px]"
          src={OfferIcon}
          alt="Offer Icon"
          priority
        />
        Lorem ipsum dolor
      </div>
      <div className="text-[#EB4C6B] sm:flex items-center gap-2 hidden text-[12px]">
        <Image
          className="w-[16px] h-[16px]"
          src={OfferIcon}
          alt="Offer Icon"
          priority
        />
        Lorem ipsum dolor
      </div>
      <div className="text-[#EB4C6B] sm:flex items-center gap-2 hidden text-[12px]">
        <Image
          className="w-[16px] h-[16px]"
          src={OfferIcon}
          alt="Offer Icon"
          priority
        />
        Lorem ipsum dolor
      </div>
    </div>
  );
}

export default AdvertisementStripBar;
