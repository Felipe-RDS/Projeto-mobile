import { Injectable } from '@angular/core';
import { CommonArticles } from 'src/app/domain/model/common.articles';

@Injectable({
  providedIn: 'root'
})
export class CommonArticlesService {
  public commonArticles: Array<CommonArticles> = [
    {
        id: 0,
        title: 'Sun',
        subtitle: 'Yellow dwarf star',
        text: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit..',
        url: 'https://solarsystem.nasa.gov/solar-system/sun/overview/',
        image: '',
    },
    {
        id: 1,
        title: 'Mercury',
        subtitle: '',
        text: 'Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earths Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days...',
        url: 'https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/',
        image: '',
    },
    {
        id: 2,
        title: 'Mercury',
        subtitle: '',
        text: 'Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earths Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days...',
        url: 'https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/',
        image: '',
    }
  ];
  constructor() { }

  public get(){
    return this.commonArticles;
  }
}