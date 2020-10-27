import { block } from '../utils';
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('text'), block('title'), block('image'), block('TextColumns')].join('');
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    if (type === 'text') {
      newBlock = new TextBlock(value, { styles: styles });
    } else if (type === 'title') {
      newBlock = new TitleBlock(value, { styles: styles });
    } else if (type === 'image') {
      newBlock = new ImageBlock(value, { styles: styles });
    } else if (type === 'columns') {
      const result = value.split(', ');
      newBlock = new ColumnsBlock(result, { styles: styles });
    }

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
