import { NextResponse } from "next/server";
import db from "@/db";

interface IParams {params: Promise<{ id: string }>}

//DELETE => /api/articles/:id
export async function DELETE(request: Request,{params}: IParams) {
    await db.update(({ posts }) => {
        const idx = posts.findIndex( async post  => post.id === (await params).id);
        posts.splice(idx, 1);
    });
    return NextResponse.json({
        code: 0,
        message: 'deleted successfully'
    })
}

//PATCH => /api/articles/:id
export async function PATCH(request: Request, {params}: IParams) {
    const data = await request.json();
    let idx = -1;
    await db.update(({ posts }) => {
        idx = posts.findIndex( async post  => post.id === (await params).id);
        posts[idx] = {...posts[idx], ...data}
    });
    return NextResponse.json({
        code: 0,
        message: 'updated successfully',
        data: db.data.posts[idx]
    })
}

//GET => /api/articles/:id
export async function GET(request: Request, {params}: IParams) {
    return NextResponse.json({
        code: 0,
        message: 'fetched successfully',
        data: db.data.posts.find(async post => post.id === (await params).id)
    })
}