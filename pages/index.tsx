import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { getCharacterResults, Character } from "../types";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className="flex-col items-center flex my-4 gap-12 font-nalieta tracking-wider font-extrabold text-4xl">
      <Head>
        <title>Rick & Mortyverse</title>
        <meta
          name="description"
          content="Rick And Morty site built with Next.js & Typescript"
        ></meta>
      </Head>
      <h1 className="text-6xl tracking-widest">The Rick & Mortyverse</h1>
      <div className="flex flex-row flex-wrap gap-12 py-2 justify-center items-center">
        {characters.map((character) => (
          <Link key={character.id} href={`/${character.id}`}>
            <div className="flex flex-col items-center gap-4 bg-slate-50 p-6 text-2xl group hover:scale-105 transition-all duration-300 cursor-pointer glassmorhpism-card">
              <h1 className="font-nalieta tracking-wider font-extrabold text-4xl">
                {character.name}
              </h1>

              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                className="rounded-xl group-hover:scale-105 transition-all duration-1000 group-hover:brightness-[0.85] group-hover:border-red-200 w-300 h-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: getCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
