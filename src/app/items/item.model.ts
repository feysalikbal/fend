import { User } from '../shared/user.model';

export class Item{
  public name: string;
  public description: string;
  public imagePath: string;
  public availibility: boolean;
  public user: User[];

  constructor(name: string, description: string, imagePath: string, availibility: boolean, user: User[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.availibility = availibility;
    this.user = user;
  }
}
