export class Repo<E extends Entry> {
  readonly #items: E[] = [];

  select(hash: string) {
    return this.#items.find((item) => item.hash === hash);
  }

  selectAll() {
    return this.#items;
  }

  add(entry: E) {
    this.#items.push(entry);
  }

  update(hash: string, entry: E) {
    this.#items.map((e) => (e.hash === hash ? entry : e));
  }

  delete(hash: string) {
    this.#items.filter((e) => e.hash !== hash);
  }
}

export type Entry = {
  hash: string;
  createdAt: number;
  updatedAt: number;
};
