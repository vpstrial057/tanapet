import {eggRepository} from "@/repository/eggRepository";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const {playerId} = await request.json();
        console.log('Creating egg for player:', playerId);
        const Egg = await eggRepository.createFirstEgg(playerId);

        return NextResponse.json(
            {
                success: true,
                message: 'Egg created successfully!',
                data: Egg
            },
            {status: 201}
        );
    } catch (error) {
        console.error('Error creating egg:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error creating egg!',
                data: {}
            },
            {status: 500}
        );
    }
}