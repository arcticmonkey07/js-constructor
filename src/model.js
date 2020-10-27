import image from './assets/site-con-img-01.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae officia nemo id aliquam, eligendi nostrum saepe neque mollitia. Quibusdam, dolorum.
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript *', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(90deg, #b18992, #f59bae 37%, #f37e98)',
      color: 'white',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек.',
    'В проекте использованы принципы SOLID и ООП.',
    '* упрощенный.'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]