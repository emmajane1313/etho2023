import { MILESTONE_COVERS } from "../../constants";

export const getRandomElement = (): string[] => {
  const indices = new Set<number>();
  while (indices.size < 3) {
    indices.add(Math.floor(Math.random() * MILESTONE_COVERS.length));
  }
  const indicesArray = Array.from(indices);
  return indicesArray.map((index: number) => MILESTONE_COVERS[index]);
};
