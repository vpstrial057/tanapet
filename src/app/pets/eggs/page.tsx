import Image from "next/image";
import egg1 from "@/app/_assets/egg-1.png";
import egg2 from "@/app/_assets/egg-2.png";
import Link from "next/link";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import {Popover} from "flowbite-react";
import {parseTimeToHours} from "@/utils/dateFormat";

const eggs = [
    {
        id: 1,          // Identifiant unique de l'œuf
        rarity: 1, // Exemples: 1 = "Common", 2 = "Rare", 3 = "Epic", 4 = "Legendary"
        hatchTime: 12000, // Temps d'éclosion en secondes
        generation: 1,  // Génération de l'œuf
    },
    {
        id: 2,
        rarity: 2,
        hatchTime: 6000,
        generation: 1,
    },
    {
        id: 3,
        rarity: 1,
        hatchTime: 3000,
        generation: 1,
    },
    {
        id: 4,
        rarity: 2,
        hatchTime: 1500,
        generation: 1,
    },
    {
        id: 5,
        rarity: 1,
        hatchTime: 12000,
        generation: 2,
    },
    {
        id: 6,
        rarity: 2,
        hatchTime: 6000,
        generation: 2,
    },
    {
        id: 7,
        rarity: 1,
        hatchTime: 3000,
        generation: 2,
    },
    {
        id: 8,
        rarity: 2,
        hatchTime: 1500,
        generation: 2,
    },
    {
        id: 9,
        rarity: 1,
        hatchTime: 12000,
        generation: 3,
    },
    {
        id: 10,
        rarity: 2,
        hatchTime: 6000,
        generation: 3,
    },
    {
        id: 11,
        rarity: 1,
        hatchTime: 3000,
        generation: 3,
    },
    {
        id: 12,
        rarity: 2,
        hatchTime: 1500,
        generation: 3,
    }
];
export default function EggsList() {

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-6 py-8 px-4">
            <div className="flex flex-row items-center justify-center gap-4 px-4">
                <Link
                    href={"/pets/eggs"}
                    className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                >
                    My eggs
                </Link>
                <Link
                    href={"/pets"}
                    className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                >
                    My pets
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-center text-black">
                My Eggs
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full">
                {eggs.map((egg) => (
                    <div key={egg.id} className="p-4 bg-white rounded-md shadow-md">
                        {egg.rarity === 1 && (
                            <div className="flex flex-col items-center justify-center">
                                <Popover
                                    aria-labelledby="default-popover"
                                    arrow={false}
                                    content={
                                        <div className="w-64 text-sm text-gray-500">
                                            <div
                                                className="border-b border-gray-200 bg-gray-100 rounded-t-md px-3 py-2">
                                                <h3 id="default-popover" className="font-semibold text-gray-900">Egg
                                                    #{egg.id}</h3>
                                            </div>
                                            <div className="px-3 py-2">
                                                <p>Rarity: Common</p>
                                                <p>Generation: {egg.generation}</p>
                                                <p>Hatch Time: {parseTimeToHours(egg.hatchTime)}</p>
                                            </div>
                                        </div>
                                    }
                                >
                                    <InformationCircleIcon className="w-8 h-8 self-end text-gray-500"/>
                                </Popover>
                                <Link href={`/pets/eggs/${egg.id}`} className="w-full flex items-center justify-center">
                                    <Image src={egg2} alt="egg" className="w-24 h-24" priority={true}/>
                                </Link>
                                <p className="text-sm text-gray-700 font-bold">Egg #{egg.id}</p>
                            </div>
                        )}
                        {egg.rarity === 2 && (
                            <div className="flex flex-col items-center justify-center">
                                <InformationCircleIcon className="w-8 h-8 self-end text-gray-500"/>
                                <Link href={`/eggs/${egg.id}`} className="w-full flex items-center justify-center">
                                    <Image src={egg1} alt="egg" className="w-24 h-24" priority={true}/>
                                </Link>
                                <p className="text-sm text-gray-700 font-bold">Egg #{egg.id}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}