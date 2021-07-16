import { TennisGame } from './TennisGame';



class Player {
  name: string = ''
  score: number = 0

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }
}
export class TennisGame1 implements TennisGame {
  private m_score1: number;
  private m_score2: number;
  private player1Name: string;
  private player2Name: string;
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = new Player(player1Name).name;
    this.player2Name = new Player(player2Name).name;

    this.m_score1 = new Player(player1Name).score;
    this.m_score2 = new Player(player2Name).score;

    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1.name)
      this.player1.score += 1;
    else
      this.player2.score += 1;
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
    const isScoreTied = this.player1.score === this.player2.score
    const potentialEndGame = this.player1.score >= 4 || this.player2.score >= 4

    if (isScoreTied) {
      return this.showTieScore(this.player1.score)
    }

    if (potentialEndGame) {
      return this.showPotentialEndGameScore(this.player1.score, this.player2.score)
    }

    return `${this.getTennisWord(this.player1.score)}-${this.getTennisWord(this.player2.score)}`
  }
}
