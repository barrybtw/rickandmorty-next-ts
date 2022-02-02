import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getCharacterResults, Character } from "../types";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className="flex-col items-center flex my-4 gap-12">
      <h1 className="text-4xl">The Rickuniverse</h1>
      <div className="flex flex-row flex-wrap gap-4 py-2 justify-center items-center">
        {characters.map((character) => (
          <Link key={character.id} href={`/${character.id}`}>
            <div className="flex flex-col items-center gap-4 bg-slate-50 rounded-lg p-6 text-2xl group hover:scale-105 transition-all duration-300 cursor-pointer">
              <h1>{character.name}</h1>
              <img
                src={character.image}
                alt={character.name}
                className="rounded-xl group-hover:scale-105 transition-all duration-1000 group-hover:brightness-[0.85] group-hover:border-red-200"
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
