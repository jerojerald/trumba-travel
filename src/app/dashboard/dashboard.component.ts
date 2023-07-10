import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  slides = [
    {
      img: "assets/hotels.png",
      radingInfo: true,
      hotelName: "St Giles London - A St Giles Hotel",
      addr: 'Bedford Avenue,London,WC1B 3GH',
      landMark: 'LHR, London, Heathrow Airport,30 kms',
      rading: 4.7,
      reviewsCount: 464,
      priceInfo: 'Avg Per Night (Inc Flight) From',
      price: '£377.51'
    },
    {
      img: "assets/hotels.png",
      radingInfo: true,
      hotelName: "Lucknam Park Hotel & Spa",
      addr: 'Chippenham SN14 8AZ',
      landMark: 'Lucknam Park Airport,30 kms',
      rading: 4.9,
      reviewsCount: 1000,
      priceInfo: 'Avg Per Night (Inc Flight) From',
      price: '£777.51'
    },
    {
      img: "assets/hotels.png",
      radingInfo: true,
      hotelName: "Lemon Tree Stay",
      addr: 'Tv. do Pé da Cruz 10, 8000-404 Faro',
      landMark: 'Portugal•+351 918 604 040',
      rading: 4.8,
      reviewsCount: 800,
      priceInfo: 'Avg Per Night (Inc Flight) From',
      price: '£699.51'
    },
    {
      explore: true,
      exInfo: 'Explore More Popular Destinations'
    },
    {
      img: "assets/hotels.png",
      radingInfo: true,
      hotelName: "St Giles London - A St Giles Hotel",
      addr: 'Bedford Avenue,London,WC1B 3GH',
      landMark: 'LHR, London, Heathrow Airport,30 kms',
      rading: 4.7,
      reviewsCount: 464,
      priceInfo: 'Avg Per Night (Inc Flight) From',
      price: '£377.51'
  },
  ];

  // slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};
  slideConfig = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  @ViewChild('slickModal', { static: true }) slickModal!: SlickCarouselComponent;

  constructor() { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }


}
