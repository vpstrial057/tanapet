import {playerRepository} from "@/repository/playerRepository";
import {NextResponse} from "next/server";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const player = await playerRepository.findByTelegramId(id);

        if (!player) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Player not found!',
                    data: {}
                },
                {status: 404}
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Player fetched successfully!',
                data: player
            },
            {status: 200}
        );
    } catch (error) {
        console.error('Error fetching player:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error fetching player!',
                data: {}
            },
            {status: 500}
        );
    }
}

export async function PUT(request: Request, {params}: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const playerDTO = await request.json();

        const player = await playerRepository.update(id, playerDTO);

        return NextResponse.json(
            {
                success: true,
                message: 'Player updated',
                data: player
            },
            {status: 200}
        )
    } catch (error) {
        console.error('Error updating player:', error)
        return NextResponse.json(
            {
                success: false,
                message: 'Error updating player',
                data: {}
            },
            {status: 500}
        );
    }
}