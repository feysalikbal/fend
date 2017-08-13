import { Item } from '../items/item.model';

export class User{
  public name: string;
  public email: string;
  public imagePath: string;
  public points: number;

  constructor(name: string, email: string, imagePath: string, points: number){
    this.name = name;
    this.email = email;
    this.imagePath = imagePath;
    this.points = points;
  }
}
