import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

export default function result() {
  return GameSavingLoader.load().then((saving) => new GameSaving(saving), (error) => error);
}