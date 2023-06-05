import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  numberOfRoms: number = 10
  showRooms: boolean = false

  increaseNumOfRooms(): void {
    this.showRooms = !this.showRooms
  }

  hotelName: string = 'N.O.E Hotel'

  rooms: Rooms = {
    availableRooms: 20,
    bookedRooms: 5,
    totalRooms: 30
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen',
      price: 500,
      photos: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5123567
    },

    {
      roomNumber: 2,
      roomType: 'Single Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen',
      price: 300,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_pR5qVHsfZbhKNr59kyzicSNBOHirtXKx6yRs66Y&s',
      checkInTime: new Date('01-Jun-2023'),
      checkOutTime: new Date('12-Nov-2023'),
      rating: 4.235454657
    },

    {
      roomNumber: 3,
      roomType: 'Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen, siting room',
      price: 800,
      photos: 'https://st.depositphotos.com/3438085/4930/i/450/depositphotos_49309481-stock-photo-hotel-room.jpg',
      checkInTime: new Date('03-Jun-2023'),
      checkOutTime: new Date('11-Nov-2023'),
      rating: 3.344567788
    },

    { 
      roomNumber: 4,
      roomType: 'Junior Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen, siting room',
      price: 600,
      photos: 'https://media.cntraveler.com/photos/53da5aa96dec627b149e509d/master/w_320%2Cc_limit/royal-ethiad-suite-jumeirah-abu-dhabi-2.jpg',
      checkInTime: new Date('01-Jun-2023'),
      checkOutTime: new Date('05-Nov-2023'),
      rating: 5.545667
    }
  ]
}
