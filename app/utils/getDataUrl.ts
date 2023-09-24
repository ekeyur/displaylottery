export const getDataUrl = (gameNumber: string | undefined, state: string) => {
  switch(state) {
    case 'GA':
      return `https://www.galottery.com/api/v1/instant-games/games/${gameNumber}`;
  }
}