export const getImageUrl = (gameNumber: string, state: string) => {
  switch(state) {
    case 'GA':
      return `https://www.galottery.com/content/dam/portal/images/scratchers-games/${gameNumber}/ticket.png`;
  }
}