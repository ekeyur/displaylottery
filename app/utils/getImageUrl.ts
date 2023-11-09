export const getImageUrl = (gameNumber: string, state: string) => {
  switch(state) {
    case 'GA':
      return {
        url: `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`,
        falbackUrl: `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`
      };
  }
}