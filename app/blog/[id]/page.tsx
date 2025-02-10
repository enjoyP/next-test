import React from "react";
import { Card } from "antd";
import { data } from "@/data"

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
    return {
        title: `博客详情 - ${params.id}`
    }
}

export default function Page({ params }: IParams) {
    const item = data.find(item => item.id === +params.id)!;
    return (
        <Card title={item.title}>
            {item.body}
        </Card>
    );
}