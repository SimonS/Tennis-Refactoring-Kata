import { TennisGame } from './TennisGame';



class Player {
  name: string
  score: number

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}
export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = new Player(player1Name, 0).name;
    this.player2Name = new Player(player2Name, 0).name;
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

  showPotentialEndGameScore(m_score1: number, m_score2: number): string {
    const minusResult: number = m_score1 - m_score2;

    if (minusResult === 1) return 'Advantage player1';
    else if (minusResult === -1) return 'Advantage player2';
    else if (minusResult >= 2) return 'Win for player1';
    return 'Win for player2';
  }

  getTennisWord(score: number): string {
    switch (score) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
    }
  }

  getScore(): string {
    const isScoreTied = this.m_score1 === this.m_score2
    const potentialEndGame = this.m_score1 >= 4 || this.m_score2 >= 4

    if (isScoreTied) {
      return this.showTieScore(this.m_score1)
    }

    if (potentialEndGame) {
      return this.showPotentialEndGameScore(this.m_score1, this.m_score2)
    }

    return `${this.getTennisWord(this.m_score1)}-${this.getTennisWord(this.m_score2)}`
  }
}
