import type { CircusPerformance } from "~/shared/types/presales";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://localhost:8090");

export const usePocketbase = () => {
  const getPerformances = async () => {
    const performances = await pb
      .collection("circus_performance")
      .getFullList();
    return performances as unknown as CircusPerformance[];
  };

  return {
    getPerformances,
  };
};
