import {playerRepository} from "@/repository/playerRepository";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const playerDTO = await request.json();
        const player = await playerRepository.create(playerDTO);

        return NextResponse.json(
            {
                success: true,
                message: 'Player created successfully!',
                data: player
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating player:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error creating player!',
                data: {}
            },
            { status: 500 }
        );
    }
}
