import { Injectable } from '@angular/core';
import {IDog} from '../model/IDog';
import {HouseService} from './house.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogs: IDog[];
  houseService: HouseService;

  constructor(houseService: HouseService) {
    this.houseService = houseService;

    this.dogs = [
      {
        'dogId': 2,
        'nickname': 'The Lord of the Floofers',
        'realName': 'J.R.R. Tolkien',
        'dateOfBirth': '7 giugno 2017',
        'netWorth': 16.91,
        'goodnessRating': 4.4,
        'pictureUrl': './api/img/2.jpg',
        'bankAccountNumber': '9788812340026'
      },
      {
        'dogId': 151,
        'nickname': 'The Eye of the Dog',
        'realName': 'Robert Jordan',
        'dateOfBirth': '24 aprile 2013',
        'netWorth': 14.99,
        'goodnessRating': 4.0,
        'pictureUrl': './api/img/151.jpg',
        'bankAccountNumber': '9788812341511'
      },
      {
        'dogId': 62,
        'nickname': 'The Road of Borks',
        'realName': 'Brandon Sanderson',
        'dateOfBirth': '26 settebre 2013',
        'netWorth': 12.66,
        'goodnessRating': 4.4,
        'pictureUrl': './api/img/62.jpg',
        'bankAccountNumber': '9788812340620'
      },
      {
        'dogId': 232,
        'nickname': 'The puppies of the Moon',
        'realName': 'Steven Erikson',
        'dateOfBirth': '30 novembre 2017',
        'netWorth': 11.90,
        'goodnessRating': 3.8,
        'pictureUrl': './api/img/232.jpg',
        'bankAccountNumber': '9788812342327'
      },
      {
        'dogId': 226,
        'nickname': 'The Call of the Sticks',
        'realName': 'Joe Abercrombie',
        'dateOfBirth': '28 marzo 2013',
        'netWorth': 9.50,
        'goodnessRating': 3.2,
        'pictureUrl': './api/img/226.jpg',
        'bankAccountNumber': '9788812342266'
      },
      {
        'dogId': 89,
        'nickname': 'Ten Little Puppers',
        'realName': 'Agatha Christie',
        'dateOfBirth': '19 giugno 2012',
        'netWorth': 8.50,
        'goodnessRating': 4.6,
        'pictureUrl': './api/img/89.jpg',
        'bankAccountNumber': '9788812340897'
      },
      {
        'dogId': 291,
        'nickname': 'The White Woofer',
        'realName': 'Wilkie Collins',
        'dateOfBirth': '16 aprile 2015',
        'netWorth': 17.65,
        'goodnessRating': 3.7,
        'pictureUrl': './api/img/291.jpg',
        'bankAccountNumber': '9788812342914'
      },
      {
        'dogId': 3,
        'nickname': 'The Hound of the Barkervilles',
        'realName': 'Arthur Conan Doyle',
        'dateOfBirth': '24 gennaio 2015',
        'netWorth': 8.00,
        'goodnessRating': 4.8,
        'pictureUrl': './api/img/3.jpg',
        'bankAccountNumber': '9788812340033'
      },
      {
        'dogId': 72,
        'nickname': 'Murder on the Monch Express',
        'realName': 'Agatha Christie',
        'dateOfBirth': '22 aprile 2014',
        'netWorth': 8.50,
        'goodnessRating': 4.2,
        'pictureUrl': './api/img/72.jpg',
        'bankAccountNumber': '9788812340729'
      },
      {
        'dogId': 237,
        'nickname': 'The Great Naps',
        'realName': 'Raymond Chandler',
        'dateOfBirth': '1 novembre 2013',
        'netWorth': 7.65,
        'goodnessRating': 3.5,
        'pictureUrl': './api/img/237.jpg',
        'bankAccountNumber': '9788812342372'
      },
      {
        'dogId': 206,
        'nickname': 'The Maltese Dachsund',
        'realName': 'Dashiel Hammett',
        'dateOfBirth': '14 giugno 2016',
        'netWorth': 10.20,
        'goodnessRating': 4.4,
        'pictureUrl': './api/img/206.jpg',
        'bankAccountNumber': '9788812342068'
      },
      {
        'dogId': 53,
        'nickname': 'Mr. Ripley\'s Hound',
        'realName': 'Patricia Highsmith',
        'dateOfBirth': '31 marzo 2016',
        'netWorth': 13.00,
        'goodnessRating': 2.8,
        'pictureUrl': './api/img/53.jpg',
        'bankAccountNumber': '9788812340538'
      },
      {
        'dogId': 286,
        'nickname': 'Lord Peter and the Other Pup',
        'realName': 'Dorothy L. Sayers',
        'dateOfBirth': '26 maggio 2011',
        'netWorth': 6.93,
        'goodnessRating': 4.0,
        'pictureUrl': './api/img/286.jpg',
        'bankAccountNumber': '9788812342860'
      }
    ];
  }

  getAllDogs(): IDog[] {
    return this.dogs.map(d => d);
  }

  getDog(id: number) {
    return this.dogs.find(dog => dog.dogId === id);
  }

  getDogsInHouse(houseId: number): IDog[] {
    const house = this.houseService.getHouse(houseId);
    return this.dogs.filter(dog => house.dogIds.includes(dog.dogId));
  }
}
