'use client';
import {useState, useEffect} from "react";
import Modal from "@/components/Modal/Modal";
import {usePlayer} from "@/store/usePlayer";
import {useRouter} from "next/navigation";
import {Link} from "@/components/Link/Link";
import Image from "next/image";
import hatchery from "@/app/_assets/hatchery.png";
import earn from "@/app/_assets/earn.png";
import care from "@/app/_assets/care.png";
import chestClose from "@/app/_assets/chest-close.png";
import chestOpen from "@/app/_assets/chest-open.png";
import {eggService} from "@/services/eggService";
import {ResponseCode} from "@/types/payload/response";
import {playerService} from "@/services/playerService";
import {Player} from "@/types/entities/player";

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const [isChestOpen, setIsChestOpen] = useState(false);
    const {player, setPlayer} = usePlayer();
    const router = useRouter();

    useEffect(() => {
        if (!player) {
            router.push('/');
            return;
        }

        if (player && !player.hasMintFirstEgg) {
            setOpenModal(true);
        }
    }, [player, router]);

    const onButtonClick = () => {
        if (isChestOpen) {
            setOpenModal(false);
        } else {
            console.log('Opening chest');
            setIsChestOpen(true);
        }
    };

    useEffect(() => {
        const mintFirstEgg = async () => {
            if (!player || player.hasMintFirstEgg) {
                return;
            }
            const eggResponse = await eggService.createFirstEgg(player.id);

            if (eggResponse.code !== ResponseCode.CREATED) {
                throw new Error('Error creating first egg');
            }

            const playerResponse = await playerService.update(player.id, { ...player, hasMintFirstEgg: true });

            if (playerResponse.code === ResponseCode.OK) {
                const updatedPlayer = playerResponse.data as Player
                setPlayer(updatedPlayer);
                router.push('/hatchery');
            }
        }

        if (isChestOpen) {
            mintFirstEgg();
        }
    }, [isChestOpen, player, router, setPlayer]);

    const modalContent = (
        <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold pt-8">Welcome to TamaPet&#39;z</span>
            <span
                className="text-md font-normal">This is your first time here, let&#39;s start by opening this chest!</span>
            <div className="p-2 bg-white">
                <Image src={isChestOpen ? chestOpen : chestClose} alt="Chest" priority={true}
                       className="rounded-md mx-auto"/>
            </div>
            <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={onButtonClick}
            >
                {isChestOpen ? 'Close' : 'Open chest'}
            </button>
        </div>
    );

    return (
        <div className="flex-1 flex flex-col items-center my-4">
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                modalContent={modalContent}
                isCloseable={true}
            />
            <div className="relative p-2 rounded-md">
                <Link href={"/hatchery"}>
                    <Image src={hatchery} alt="Hatchery" priority={true} className="rounded-md h-[179.67px]"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center gap-2">
                        <span className="text-white font-bold text-xl">Hatchery</span>
                        <span className="text-white font-semibold text-md">Let&apos;s hatch some eggs!</span>
                    </div>
                </Link>
            </div>
            <div className="relative p-2 rounded-md">
                <Link href={"/earn"}>
                    <Image src={earn} alt="Earn" priority={true} className="rounded-md"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-xl">Earn</span>
                        <span className="text-white font-semibold text-md">Earn coins with your pets!</span>
                    </div>
                </Link>
            </div>
            <div className="relative p-2 rounded-md">
                <Link href={"/care"}>
                    <Image src={care} alt="Care" priority={true} className="rounded-md"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-xl">Care</span>
                        <span className="text-white font-semibold text-md">Take care of your pets!</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
