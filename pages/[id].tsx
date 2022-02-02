import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Character, getCharacterResults } from "../types";

const Character: NextPage<{ character: Character }> = ({ character }) => {
  return (
    <div>
      <h1>Hello {character.name}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: getCharacterResults = await res.json();

  const paths = results.map((result: Character) => ({
    params: { id: result.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params?.id}`
  );
  console.log("RES" + (await res));

  const results = await res.json();
  console.log("RESULTS" + (await results));

  return {
    props: { character: results },
  };
};

export default Character;
