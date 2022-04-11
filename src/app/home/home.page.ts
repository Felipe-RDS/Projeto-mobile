import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonArticles } from 'src/app/domain/model/common.articles';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public commonArticles: Array<CommonArticles> = [
    {
        id: 0,
        title: 'Sun 🌣',
        subtitle: 'Yellow dwarf star',
        text: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system.',
        url: 'https://solarsystem.nasa.gov/solar-system/sun/overview/',
        image: './../../assets/images/b.png',
        icon: './../../assets/images/sunny-outline.svg'
    },
    {
        id: 1,
        title: 'Moon ☾',
        subtitle: '',
        text: 'The regular daily and monthly rhythms of Earth’s only natural satellite, the Moon, have guided timekeepers for...',
        url: 'https://moon.nasa.gov/inside-and-out/overview/',
        image: './../../assets/images/c.png',
        icon: './../../assets/images/sunny-outline.svg'
    },
    {
        id: 2,
        title: 'Earth ⊕',
        subtitle: '',
        text: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
        url: 'https://solarsystem.nasa.gov/planets/earth/overview/',
        image: '',
        icon: ''
    }
  ];

  constructor(private menu: MenuController) { }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
  }

}
