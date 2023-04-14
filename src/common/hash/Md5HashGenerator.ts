import md5 from 'md5';
import { HashGenerator } from './HashGenerator';

export class Md5HashGenerator implements HashGenerator {
  readonly #tag: string;
  #count = 0;

  constructor(tag: string) {
    this.#tag = tag;
  }

  generate(): string {
    this.#count++;
    return `${this.#tag}-${md5([this.#count]).toString()}`;
  }
}
