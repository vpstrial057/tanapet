'use client';
import homeIcon from "@/app/_assets/home.svg";
import swordIcon from "@/app/_assets/sword.svg";
import cartIcon from "@/app/_assets/cart.svg";
import petIcon from "@/app/_assets/pet.svg";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import {Link} from "@/components/Link/Link";
import {usePlayer} from "@/store/usePlayer";

export default function Navigation() {
    const pathname = usePathname();
    const {player} = usePlayer();

    if (!player) {
        return null;
    }

    return (
        <nav className="w-full sticky bottom-0 left-0 right-0 bg-white shadow-md rounded-t-2xl border border-gray-200">
            <ul className="flex justify-between items-center space-x-4 px-4 py-2">
                <li className="flex-1">
                    <Link href={"/home"} className={`flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300 ${pathname === "/home" ? "bg-gray-300 rounded-lg" : ""}`}>
                        <Image src={homeIcon} alt="home" className="w-12 h-12"/>
                        <span className="text-black">
                            Home
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/pets"} className={`flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300 ${pathname.includes("/pets") ? "bg-gray-200 rounded-lg" : ""}`}>
                        <Image src={petIcon} alt="pet" className="w-12 h-12"/>
                        <span className="text-black">
                            Pets
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/launch-params"} className={`flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300 ${pathname.includes("/quests") ? "bg-gray-200 rounded-lg" : ""}`}>
                        <Image src={swordIcon} alt="sword" className="w-12 h-12"/>
                        <span className="text-black">
                            Quests
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/init-data"} className={`flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300 ${pathname.includes("/shop") ? "bg-gray-200 rounded-lg" : ""}`}>
                        <Image src={cartIcon} alt="cart" className="w-12 h-12"/>
                        <span className="text-black">
                            Shop
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}