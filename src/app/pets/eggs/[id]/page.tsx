'use client';
import {useEffect, useState} from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import TopBar from "@/components/TopBar/TopBar";
import egg1 from "@/app/_assets/egg-1.png";
import {useRouter} from "next/navigation";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {parseTimeToHours} from "@/utils/dateFormat";

// Définir les caractéristiques de l'œuf
const eggCharacteristics = {
    id: 1,          // Identifiant unique de l'œuf
    rarity: 1, // Exemples: 1 = "Common", 2 = "Rare", 3 = "Epic", 4 = "Legendary"
    hatchTime: 12000, // Temps d'éclosion en secondes
    generation: 1,  // Génération de l'œuf
};

export default function EggDetail() {
    const [timeRemaining, setTimeRemaining] = useState(eggCharacteristics.hatchTime);
    const [coins, setCoins] = useState(500); // Monnaie initiale
    const [startHatchCountdown, setStartHatchCountdown] = useState(false);
    const [eggHatched, setEggHatched] = useState(false);
    const [shake, setShake] = useState(true);
    const [cost, setCost] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const shakeTimeout = setTimeout(() => {
            setShake(false);
            const resetTimeout = setTimeout(() => {
                setShake(true);
            }, 5000); // Réactiver l'animation après 5 secondes
            return () => clearTimeout(resetTimeout);
        }, 820); // Durée de l'animation shake (0.82s)

        return () => clearTimeout(shakeTimeout);
    }, [shake]);

    useEffect(() => {
        if (startHatchCountdown) {
            if (timeRemaining > 0) {
                const timer = setInterval(() => {
                    setTimeRemaining(timeRemaining - 1);
                }, 1000);

                return () => clearInterval(timer);
            } else {
                setEggHatched(true);
            }
        }
    }, [startHatchCountdown, timeRemaining]);

    useEffect(() => {
        setCost(calculateCost(eggCharacteristics.rarity, eggCharacteristics.hatchTime));
    }, []);

    // Convertir le temps restant en heures
    const reduceTime = () => {
        const reductionAmount = calculateReductionAmount(eggCharacteristics.rarity, timeRemaining);
        if (coins >= cost) {
            setCoins(coins - cost);
            setTimeRemaining(timeRemaining - reductionAmount);
            console.log("Reduced time by", reductionAmount, "seconds");
            console.log("New time remaining:", timeRemaining - reductionAmount);

            // Recalculate the cost based on the new time remaining
            const newCost = calculateCost(eggCharacteristics.rarity, timeRemaining - reductionAmount);
            setCost(newCost + cost);
            console.log("New cost:", newCost);
        } else {
            alert("Not enough currency!");
        }
    };

    const calculateReductionAmount = (rarity: number, cost: number) => {
        let reductionAmount;

        switch (rarity) {
            case 2:
                reductionAmount = Math.floor(cost * 0.1);
                break;
            case 3:
                reductionAmount = Math.floor(cost * 0.2);
                break;
            case 4:
                reductionAmount = Math.floor(cost * 0.3);
                break;
            default:
                reductionAmount = Math.floor(cost * 0.05);
                break;
        }

        return reductionAmount;
    };

    const calculateCost = (rarity: number, hatchTime: number) => {
        let cost = 10;

        switch (rarity) {
            case 1:
                cost = Math.floor(hatchTime * 0.001);
                break;
            case 2:
                cost = Math.floor(hatchTime * 0.005);
                break;
            case 3:
                cost = Math.floor(hatchTime * 0.01);
                break;
            case 4:
                cost = Math.floor(hatchTime * 0.02);
                break;
            default:
                break;
        }
        return cost;
    };

    return (
            <div className="h-full w-full flex flex-col items-center justify-center space-y-6 py-8">
                <div className="relative w-full flex items-center gap-4 px-4">
                    <div className="absolute top-0 left-4 flex items-center justify-center">
                        <button onClick={() => router.back()} className="text-black">
                            <ArrowLeftIcon className="w-8 h-8"/>
                        </button>
                    </div>
                    <h1 className="flex-1 text-3xl font-bold text-center text-black">
                        Egg #{eggCharacteristics.id}
                    </h1>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <span
                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        {eggCharacteristics.rarity}
                    </span>
                    <span
                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Generation {eggCharacteristics.generation}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="p-1 rounded-md bg-gray-300 shadow-md">
                        <div className="p-1 rounded-md bg-white">
                            <Image src={egg1} alt="egg" className={`w-48 h-48 ${shake ? 'animate-shake' : ''}`}
                                   priority={true}/>
                        </div>
                    </div>
                    <p className="text-lg text-center text-gray-700 mt-4">
                        {eggHatched ? "Your eggs has hatched!" : `Time remaining: ${parseTimeToHours(timeRemaining)}`}
                    </p>
                    {!startHatchCountdown && !eggHatched && (
                        <button
                            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            onClick={() => setStartHatchCountdown(true)}
                        >
                            Start Hatching
                        </button>
                    )}
                    {!eggHatched && startHatchCountdown && (
                        <button
                            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            onClick={reduceTime}
                        >
                            Reduce Time (Cost: {cost})
                        </button>
                    )}
                </div>
            </div>
    );
}
