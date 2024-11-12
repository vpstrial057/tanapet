'use client';
import {useRouter} from 'next/navigation';
import {ArrowLeftIcon, PlusIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import egg1 from '@/app/_assets/egg-1.png'; // Assurez-vous que ces chemins sont corrects
import egg2 from '@/app/_assets/egg-2.png';
import {usePlayer} from "@/store/usePlayer";
import {useEffect} from "react";

const hatchery = {
    size: 2,
    eggs: [
        {
            id: 1,
            rarity: 1,
            hatchTime: 12000,
            generation: 1,
            image: egg1,
            status: 'Ready', // Status could be 'Ready', 'Hatching', 'Completed'
        },
        {
            id: 2,
            rarity: 2,
            hatchTime: 24000,
            generation: 2,
            image: egg2,
            status: 'Hatching',
        },
    ],
    level: 2,
    nextLevelCost: 1000,
}

export default function Hatchery() {
    const router = useRouter();
    const {player} = usePlayer();

    useEffect(() => {
        console.log("player", player);
    }, [player]);

    return (
        <div className="flex-1 w-full flex flex-col items-center my-4 px-4">
            <div className="relative w-full flex items-center gap-4 mb-6">
                <div className="absolute top-0 left-4 flex items-center justify-center">
                    <button onClick={() => router.back()} className="text-black">
                        <ArrowLeftIcon className="w-8 h-8"/>
                    </button>
                </div>
                <h1 className="flex-1 text-3xl font-bold text-center text-black">
                    Hatchery
                </h1>
            </div>
            <div className="w-full flex flex-col items-center mb-6">
                <h2 className="text-2xl font-semibold text-black mb-4">Your Eggs</h2>
                <div className="grid grid-cols-2 gap-4 w-full">
                    {hatchery.eggs.map((egg) => (
                        <div key={egg.id}
                             className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <Image src={egg.image} alt={`egg-${egg.id}`} className="w-24 h-24 mb-4"/>
                            <div className="text-lg font-semibold text-black mb-2">Egg #{egg.id}</div>
                            <div className="text-sm text-gray-600 mb-2">
                                Status: {egg.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700">
                <PlusIcon className="w-6 h-6 inline-block mr-2"/>
                Add New Egg
            </button>
            <div className="w-full flex flex-col items-center mt-6 mx-4 p-4">
                <div className="text-2xl font-semibold text-black mb-4">Incubator stats</div>
                <div className="w-full flex gap-4 justify-center items-center mb-6">
                    <span
                        className="bg-blue-300 text-blue-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                        Level: {hatchery.level}
                    </span>
                    <span
                        className="bg-blue-300 text-blue-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                        Max eggs: {hatchery.size}
                    </span>
                </div>
                <button
                    className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 mb-4">
                    Upgrade Incubator (Cost: {hatchery.nextLevelCost})
                </button>
            </div>
        </div>
    )
        ;
}
