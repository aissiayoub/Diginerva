import { Component } from '@angular/core';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.scss']
})
export class OurArticlesComponent {
  images = [];

  responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '896px',
        numVisible: 4
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '614px',
        numVisible: 2
      },
      {
        breakpoint: '460px',
        numVisible: 1
      }
  ];

  tab = [
    {
      'title': 'Article 1',
      'path': '../../../../assets/media/home/articles/article-1.jpg',
      'thumbnails': '../../../../assets/media/home/articles/thumbnails/article-1.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'articlePath': 'https://www.google.com'
    },
    {
      'title': 'Article 2',
      'path': '../../../../assets/media/home/articles/article-2.jpg',
      'thumbnails': '../../../../assets/media/home/articles/thumbnails/article-2.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'articlePath': 'https://www.google.com'
    },
    {
      'title': 'Article 3',
      'path': '../../../../assets/media/home/articles/article-3.jpg',
      'thumbnails': '../../../../assets/media/home/articles/thumbnails/article-3.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'articlePath': 'https://www.google.com'
    },
    {
      'title': 'Article 4',
      'path': '../../../../assets/media/home/articles/article-4.jpg',
      'thumbnails': '../../../../assets/media/home/articles/thumbnails/article-4.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'articlePath': 'https://www.google.com'
    },
    {
      'title': 'Article 5',
      'path': '../../../../assets/media/home/articles/article-5.jpg',
      'thumbnails': '../../../../assets/media/home/articles/thumbnails/article-5.jpg',
      'caption': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'articlePath': 'https://www.google.com'
    }
  ]

  readArticle(path: string){
    window.open(path);
  }
}
