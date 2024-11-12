import {Popover} from "flowbite-react";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import pet1 from "@/app/_assets/baby-dragon-red.png";
import pet2 from "@/app/_assets/baby-unicorn.png";
import pet3 from "@/app/_assets/baby-dog.png";
import pet4 from "@/app/_assets/baby-slime.png";
import pet5 from "@/app/_assets/baby-griffin.png";
import pet6 from "@/app/_assets/adult-dog.png";
import pet7 from "@/app/_assets/adult-dragon-red.png";
import pet8 from "@/app/_assets/adult-unicorn.png";
import pet9 from "@/app/_assets/adult-slime.png";
import pet10 from "@/app/_assets/adult-griffin.png";

const pets = [

    {
        id: 1,
        rarity: 1,
        image: pet1,
    },
    {
        id: 2,
        rarity: 2,
        image: pet2,
    },
    {
        id: 3,
        rarity: 1,
        image: pet3,
    },
    {
        id: 4,
        rarity: 2,
        image: pet4,
    },
    {
        id: 5,
        rarity: 1,
        image: pet5,
    },
    {
        id: 6,
        rarity: 2,
        image: pet6,
    },
    {
        id: 7,
        rarity: 1,
        image: pet7,
    },
    {
        id: 8,
        rarity: 2,
        image: pet8,
    },
    {
        id: 9,
        rarity: 1,
        image: pet9,
    },
    {
        id: 10,
        rarity: 2,
        image: pet10,
    },
];

export default function PetsList() {
    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center space-y-6 py-8 px-4">
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
                My pets
            </h1>
            {pets.length > 1 ? (
                <div className="grid grid-cols-2 gap-4 w-full">
                    {pets.map((pet) => (
                        <div key={pet.id} className="p-4 bg-white rounded-md shadow-md">

                            <div className="flex flex-col items-center justify-center">
                                <Popover
                                    aria-labelledby="default-popover"
                                    arrow={false}
                                    content={
                                        <div className="w-64 text-sm text-gray-500">
                                            <div
                                                className="border-b border-gray-200 bg-gray-100 rounded-t-md px-3 py-2">
                                                <h3 id="default-popover" className="font-semibold text-gray-900">Pett
                                                    #{pet.id}</h3>
                                            </div>
                                        </div>
                                    }
                                >
                                    <InformationCircleIcon className="w-8 h-8 self-end text-gray-500"/>
                                </Popover>
                                <Link href={`/pets/${pet.id}`} className="w-full flex items-center justify-center">
                                    <Image src={pet.image} alt="egg" className="w-24 h-24" priority={true}/>
                                </Link>
                                <p className="text-sm text-gray-700 font-bold">Egg #{pet.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="text-gray-500">No pets available</p>
                    <p className="text-gray-500">Check if you have any eggs to hatch</p>
                    <Link href={"/pets/eggs"}
                          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                    >
                        Go to eggs
                    </Link>
                </div>
            )}
        </div>
    )
}