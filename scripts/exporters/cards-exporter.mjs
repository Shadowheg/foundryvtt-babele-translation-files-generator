import { AbstractExporter } from './abstract-exporter.mjs';

export class CardsExporter extends AbstractExporter {
  async _processDataset() {
    const documents = await this.pack.getDocuments();

    documents.forEach(({ name, description, cards }) => {
      const cardsDataset = {};

      cards.forEach(({ name, description, faces, back }) => cardsDataset[name] = { name, description, back, faces });

      this.dataset.entries[name] = { name, description, cards: cardsDataset };
    });
  }
}