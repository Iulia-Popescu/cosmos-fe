export interface Ticket {
  id: string;
  numberOfBoxes: number;
  hasSuperzahl: boolean;
  boxes: number[][];
  superzahl?: number;
}
