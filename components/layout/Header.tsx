import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Header: React.FC = () => {
    return (
    <header className="sticky">
        <div className="bg-[#34967C] text-white flex justify-center gap-3 px-1 py-1 items-center w-[1,728px]" > 
            <div>
                <Image src={"/assets/icons/Case Minimalistic.svg"} alt="case" width={24} height={24} />
            </div>
            <div>
                <p className="text-[12px] sm:text-[16px]"> Overseas trip? Get the latest information on travel guides </p>
            </div>
            <div>
                <button type="button" className="bg-black py-1 px-2 rounded-full w-[86] h-[30] text-white text-[14px] whitespace-nowrap text-center">
                More Info
                </button>
            </div>

        </div>
        <nav className="border-[#EBEBEB] top-0 bg-white flex justify-center space-x-2 py-3 px-3">
            <div className="border-[#EBEBEB] bg-white mx-auto container w-1/3 p-4">
                <div>
                    <Image src={"/assets/Logo Showcase.png"} alt="alx logo" width={58} height={37} />
                </div>
            </div>
            <div className="flex justify-center space-x-4 w-[737px] h-[58px] border border-[#F6F6F6] rounded-full w-1/3 p-4">
            <div className="flex items-center">
            <div className="space-y-1 min-w-72">
                <h6 className="text-[14px]">Location</h6>
                <input
                type="text"
                placeholder="Search for destination"
                className="outline-none min-w-0 text-[13px]"
                />
            </div>
                <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="flex flex-col space-y-1">
                    <label className="text-[14px] w-fit">Check in</label>
                    <input
                    type="text"
                    className="outline-none text-[13px]"
                    placeholder="Add date"
                    />
                </div>
                </div>
                <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="space-y-1">
                    <h6 className="text-[14px]">Check out</h6>
                    <input
                    type="text"
                    className="outline-none min-w-0 text-[13px]"
                    placeholder="Add date"
                    />
                </div>
                </div>
                <div className="flex items-center gap-5 h-full">
                <div className="w-px h-full bg-[#E9E9E9]" />
                <div className="space-y-1 w-fit">
                    <h6 className="text-[14px]">People</h6>
                    <input
                    type="text"
                    className="outline-none min-w-0 text-[13px]"
                    placeholder="Add guest"
                    />
                </div>
                </div>
                <div className="rounded-full size-10.5 bg-[#FFA800] p-2 ml-4 flex items-center justify-center cursor-pointer">
                <CiSearch className="text-white size-full" />
                </div>
                </div>
            </div>
            <div className="space-x-2 w-1/2 p-4">
            <button type="button" className="bg-[#34967C] py-3 px-7 rounded-full text-white">
                Sign in
            </button>
            <button type="button" className="py-3 px-7 rounded-full border border-[#ECECEC]">
                Sign up
            </button>
            </div>
        </nav>
    </header>
    ); 
};

export default Header;

