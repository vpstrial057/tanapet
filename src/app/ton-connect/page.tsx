'use client';

import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";

export default function TONConnectPage() {
  const wallet = useTonWallet();
  const router = useRouter();
  if (!wallet) {
    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center space-y-6 py-8 px-4">
            <div className="relative w-full flex items-center gap-4 px-4">
                <div className="absolute top-0 left-4 flex items-center justify-center">
                    <button onClick={() => router.back()} className="text-black">
                        <ArrowLeftIcon className="w-8 h-8"/>
                    </button>
                </div>
                <h1 className="flex-1 text-3xl font-bold text-center text-black">
                    TON Connect
                </h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-center text-black font-semibold">
                        It seems that your wallet is not connected
                    </p>
                    <p className="text-center text-black font-semibold">
                        Connect your wallet to continue
                    </p>
                </div>
                <TonConnectButton className='ton-connect-page__button'/>
            </div>
        </div>
    );
  }

    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center space-y-6 py-8 px-4">
            <div className="relative w-full flex items-center gap-4 px-4">
                <div className="absolute top-0 left-4 flex items-center justify-center">
                    <button onClick={() => router.back()} className="text-black">
                        <ArrowLeftIcon className="w-8 h-8"/>
                    </button>
                </div>
                <h1 className="flex-1 text-3xl font-bold text-center text-black">
                    TON Connect
                </h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-center text-black font-semibold">
                        Your wallet is connected
                    </p>
                    <p className="text-center text-black font-semibold">
                        You can now use the wallet to interact with the app
                    </p>
                </div>
                <TonConnectButton className='ton-connect-page__button'/>
            </div>
        </div>
    );
};
