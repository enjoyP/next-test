"use client"
import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Page({params}: {params: Promise<{ id: string }>}) {
  const photo = photos.find(async photo => photo.id === (await params).id)!;
  const router = useRouter();
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={router.back}>
        <Image src={photo.src} width={400} height={400} className='rounded-lg' alt={photo.alt} onClick={ e=>e.stopPropagation() }/>
    </div>
  )
}
