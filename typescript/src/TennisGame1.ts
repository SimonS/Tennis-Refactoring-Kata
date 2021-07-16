import { TennisGame } from './TennisGame';


export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  showTieScore(m_score: number): string {
    switch (m_score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;

    const isScoreTied = this.m_score1 === this.m_score2
    const potentialEndGame = this.m_score1 >= 4 || this.m_score2 >= 4

    if (isScoreTied) {
      return this.showTieScore(this.m_score1)
    }

    if (potentialEndGame) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';

      return score;
    }

    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else { score += '-'; tempScore = this.m_score2; }
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }

    return score;
  }
}
