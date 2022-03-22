import Link from "next/Link";
import Image from "next/image";
import africanTrendsLogo from "/cover.png";
import { CgProfile } from "react-icons/cg";

const style = {
  wrapper: `bg-[#fff] w-screen px-[1.2rem] py-[0.2rem] mb-[2.2rem] flex align-center justify-between`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[480px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-black cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-black cursor-pointer`,
};

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={africanTrendsLogo} height={80} width={190} />
        </div>
      </Link>
      <div className={style.headerItems}>
        <div className={style.headerItem}> Ideas </div>
        <div className={style.headerItem}> Cryptocurrency </div>
        <div className={style.headerItem}> Startups </div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;
