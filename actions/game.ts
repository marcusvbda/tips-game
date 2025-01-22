import words from "../constants/words";

export interface IGame {
  words: any;
  maps: any;
  traps: any;
  match: {
    playing: "teamA" | "teamB";
    tip: string;
    tipTime: number;
    leaderTime: number;
  };
}

export const getRandWords = (qty: number) => {
  const randWords: any = [];
  while (randWords.length < qty) {
    const randIndex = Math.floor(Math.random() * words.length);
    if (!randWords.includes(randIndex)) {
      randWords.push(words[randIndex]);
    }
  }
  return randWords;
};

export const getMaps = (numbers: number[], qty: number) => {
  const teamA: any = [];
  while (teamA.length < qty) {
    const randIndex = Math.floor(Math.random() * numbers.length);
    if (!teamA.includes(randIndex)) {
      teamA.push(randIndex);
    }
  }

  const teamB: any = [];
  while (teamB.length < qty) {
    const randIndex = Math.floor(Math.random() * numbers.length);
    if (!teamB.includes(randIndex) && !teamA.includes(randIndex)) {
      teamB.push(randIndex);
    }
  }

  return {
    teamA,
    teamB,
  };
};

export const getTraps = (teams: any, ids: number[], qty: number) => {
  const allTeams = teams.teamA.concat(teams.teamB);
  const traps: any = [];
  while (traps.length < qty) {
    const randIndex = Math.floor(Math.random() * ids.length);
    const value = ids[randIndex];
    if (!traps.includes(value) && !allTeams.includes(value)) {
      traps.push(value);
    }
  }
  return traps;
};

export const createGame = (
  numWords: number,
  numWordsPerTeam: number,
  numTraps: number
): IGame => {
  const words = getRandWords(numWords);
  const wordsIds = words.map((word: any) => word.id);
  const maps = getMaps(wordsIds, numWordsPerTeam);
  const traps = getTraps(maps, wordsIds, numTraps);
  return {
    words,
    maps,
    traps,
    match: {
      playing: "teamA",
      tip: "",
      tipTime: 0,
      leaderTime: 0,
    },
  };
};
