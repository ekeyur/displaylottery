export const getImageUrl = (gameNumber: string, state: string) => {
  switch(state) {
    case 'GA':
      return {
        url: `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`,
        falbackUrl: `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`
      };
    case 'SC':
      return {
        url: `https://www.sceducationlottery.com/images/games/instantgames/${gameNumber}.jpg`,
        falbackUrl: `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`
      }
  }
}