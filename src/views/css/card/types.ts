export type fromType = 'net' | 'my'

export interface Card {
  id?: number;
  from: fromType; // net: 网络
  name: string;
  author: string [];
  description: string;
  content: string;
  css: string;
  javascript?: string;
}
