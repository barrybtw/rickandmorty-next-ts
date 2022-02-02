import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Character } from "../types";

const Character: NextPage<{ character: any }> = ({ character }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Hello {character}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();

  const paths = results.map((result: Character) => ({
    params: { id: result.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const router = useRouter();
  const { id } = router.query;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const { results } = await res.json();
  return {
    props: { character: { res } },
  };
};

export default Character;
