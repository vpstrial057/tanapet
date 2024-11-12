'use client';
import coinIcon from "@/app/_assets/coin.svg";
import walletIcon from "@/app/_assets/wallet.svg";
import Image from "next/image";
import {Link} from "@/components/Link/Link";
import {usePlayer} from "@/store/usePlayer";


export default function TopBar() {
    const {player} = usePlayer();

    if (!player) {
        return null;
    }

    return (
        <div className="sticky z-10 top-0 left-0 right-0 bg-white shadow-sm border border-gray-200 w-full">
            <div className="flex justify-between items-center gap-4 px-4 py-2">
                <div className="flex flex-col items-center justify-center font-bold">
                    <Image src={coinIcon} alt="coin" className="w-12 h-12"/>
                    <span className="text-black">{player.coins}</span>
                </div>
                <div className="flex flex-col items-center justify-center font-bold">
                    <Link href='/ton-connect' className="w-full flex flex-col justify-center items-center">
                        <Image src={walletIcon} alt="wallet" className="w-12 h-12"/>
                        <span className="text-black text-sm">Wallet</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
