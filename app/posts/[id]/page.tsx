import React from 'react';
import Image from 'next/image';
import _ from 'lodash';

const Posts = async ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
     
    // const data = await getAppServerSideProps({id:(await params).id}); //getServerSideProps in the 'app' directory
    const data = await getAppStaticProps({id:(await params).id}); //getStaticProps in the 'app' directory
    console.log(data);
    // return <div>Posts: {(await params).id}</div>;
    return(
        <div>
            <div>Posts: {(await params).id}</div>
            <h2>{data.name}</h2>
            <div>height: {data.height}</div>
            <div>weight: {data.weight}</div>
            <div>
                <Image 
                    alt="pokemon pic" 
                    src={data.sprites.front_default}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    );
}

export default Posts;

// This function can be named anything (By setting the cache option to no-store,This is similar to getServerSideProps in the pages directory)
// async function getAppServerSideProps({id}:{id:string}) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{ cache: 'no-store' }).then(
//         (data) => data.json()
//     );

//     return res;
// }


// This function can be named anything (In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.)
async function getAppStaticProps({id}:{id:string}) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{ cache: 'force-cache', next :{revalidate : 60} }).then(
        (data) => data.json()
    );
    return res
}

export const dynamicParams = false;
export async function generateStaticParams() {
    return _.range(1, 20).map((id)=>({ id : id + ""}));
}