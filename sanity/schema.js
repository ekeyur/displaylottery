import { gameType } from "./schemaTypes/gameType";
import { stateType } from "./schemaTypes/stateType";
import { tagType } from "./schemaTypes/tagType";

export const schema = {
  types: [gameType, stateType, tagType],
};
