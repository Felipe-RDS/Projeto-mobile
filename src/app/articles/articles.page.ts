import { Component, OnInit } from '@angular/core';
import { CommonArticles } from 'src/app/domain/model/common.articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  public color: boolean = true;

  public commonArticles: Array<CommonArticles> = [
    {
        id: 0,
        title: 'Sun 🌣',
        subtitle: 'Yellow dwarf star',
        text: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system...',
        url: 'https://solarsystem.nasa.gov/solar-system/sun/overview/',
        image: './../../assets/images/planet-11.png',
        icon: './../../assets/images/planet-11.png'
    },
    {
        id: 1,
        title: 'Moon ☾',
        subtitle: '',
        text: 'The regular daily and monthly rhythms of Earth’s only natural satellite, the Moon, have guided timekeepers for thousands of years...',
        url: 'https://moon.nasa.gov/inside-and-out/overview/',
        image: './../../assets/images/c.png',
        icon: './../../assets/images/sunny-outline.svg'
    },
    {
        id: 2,
        title: 'Earth ⊕',
        subtitle: '',
        text: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things...',
        url: 'https://solarsystem.nasa.gov/planets/earth/overview/',
        image: '',
        icon: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
