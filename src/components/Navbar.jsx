import logoSecurity from "../assets/images/png/security-logo.png";
import search from "../assets/images/svg/search-icon.svg";
import bell from "../assets/images/svg/bell-icon.svg";
import Image from "next/image"
import PrimamryButton from "./ui/PrimamryButton";
const Navbar = () => {
  return (
    <div className="container max-w-[1260px] px-6 mx-auto h-[120px]">
      <div className="items-center h-full justify-between flex">
        <a href="/">
          <Image
            src={logoSecurity}
            alt="logo"
            className="min-w-[204px]"
            width={204}
            height={41}
          />
        </a>
        <div className="flex gap-20 items-center">
          <form className="flex gap-1">
            <input required
              type="search"
              className="w-full min-w-[462px] rounded-[160px] ps-3 font-normal font-inter border-grey text-grey border-1 text-base"
              placeholder="search"
            />
            <button type="submit" disabled className="rounded-full">
              <Image
                src={search}
                alt="search icon"
                className="cursor-pointer"
                width={48}
                height={48}
              />
            </button>
          </form>
          <div className="flex gap-4">
            <Image
              src={bell}
              width={54}
              height={54}
              alt="bell icon"
              className="cursor-pointer"
            />
            <PrimamryButton
              className="bg-black text-white hover:inset-shadow-main duration-300 hover:text-black cursor-pointer"
              children="Request access"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
