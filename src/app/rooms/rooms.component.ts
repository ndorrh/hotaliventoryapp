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

  newRomes: RoomList[] = [
    
  ]
}
