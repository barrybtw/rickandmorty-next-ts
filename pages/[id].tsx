import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Character, getCharacterResults } from "../types";

const Character: NextPage<{ character: Character }> = ({ character }) => {
  return (
    <article className="w-screen h-screen flex items-center justify-center flex-col">
      <Head>
        <title>{character.name} from Rick & Morty</title>
        <meta
          name="description"
          content="Rick And Morty site built with Next.js & Typescript"
        />
      </Head>
      <h1 className="font-nalieta text-9xl">{character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </article>
  );
};

//
//
//
//
//
//
//
// ROUTING
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: getCharacterResults = await res.json();

  const paths = results.map((result: Character) => ({
    params: { id: result.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params?.id}`
  );

  const results = await res.json();

  return {
    props: { character: results },
  };
};

export default Character;
