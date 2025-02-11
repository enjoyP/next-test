import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'

export default function page({params}: {params: Promise<{ id: string }>}) {
    const photo = photos.find(async photo => photo.id === (await params).id)!;
    return (
        <div className='container mx-auto pt-8'>
            <Image className='rounded-lg block mx-auto' src={photo.src} width={400} height={400} alt={photo.alt} />
            <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8'>
                <p>
                    <strong>Title:</strong> {photo.alt}
                </p>
                <p>
                    <strong>Price:</strong> {photo.price}
                </p>
                <p>
                    <strong>Desc:</strong> Their feathers, as white as snow, shimmer beautifully as they glide effortlessly across the sparkling water. 
                    The swans&apos; long, curved necks allow for fluid movements, whether they are foraging for food or resting peacefully. 
                    When they take to the air, their broad wings carve graceful arcs across the serene sky, captivating onlookers with their majestic flight.
                    Beyond their physical elegance, white swans are renowned for their loyalty and pure love. Typically monogamous, they form lifelong bonds with their mates. 
                    During the breeding season, they work together to build nests, incubate eggs, and raise their cygnets, demonstrating profound family commitment and cooperation.Furthermore, the white swan symbolizes peace and beauty. 
                    In many cultures, it is revered as a harbinger of good fortune, representing purity, nobility, and grace. 
                    People often use the white swan as a metaphor for those with high moral character and elegant behavior, paying tribute to their virtues.
                    In summary, the white swan, with its unique charm, is a remarkable presence in nature. 
                    It serves not only as a beautiful messenger of the natural world but also as a significant symbol in human culture. 
                    Whether watching them glide gracefully on the water or listening to their melodious calls, 
                    one cannot help but feel the wonder and harmony of nature.
                </p>
            </div>
        </div>
    )
}
