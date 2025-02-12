
import { NextRequest, NextResponse, } from "next/server";



export async function POST(request: NextRequest){
    const { login, password } = await request.json();

    //调用后端接口
    const r = await fetch('http://localhost:3001/express/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });

    const data = await r.json();

    //BFF
    //把拿到的 token 通过 cookie 的形式种植到前端 

    const response = NextResponse.json(
        {
            success: true,
            message: data.message
        },
        // {
        //     headers:{
        //         "Set-Cookie": `token=${data.data.token}; Path=/; Max-Age=86400; HttpOnly`,
        //     },
        // }
    );

    response.cookies.set('token', data.data.token, { path: '/', maxAge: 86400, httpOnly: true });

    return response;

}