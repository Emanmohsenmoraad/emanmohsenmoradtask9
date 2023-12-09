import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [
    { id: 1, name: 'Eman', city: 'Cairo' ,email:'eman@gmail.com',password:'359891',img:'https://th.bing.com/th/id/R.cd72edfd1c64ebbc533e7c012cb59382?rik=gY%2fOMpHqLCS7hw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6ip5BxABT.png&ehk=8aBmnLwHqf1TIAd%2bzRJPtKT18gHEiLNsM60dCHaE7Xw%3d&risl=&pid=ImgRaw&r=0'},
    { id: 2, name: 'Sameh', city: 'Cairo' ,email:'sameh@gmail.com',password:'359866691',img:'https://th.bing.com/th/id/R.cd72edfd1c64ebbc533e7c012cb59382?rik=gY%2fOMpHqLCS7hw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6ip5BxABT.png&ehk=8aBmnLwHqf1TIAd%2bzRJPtKT18gHEiLNsM60dCHaE7Xw%3d&risl=&pid=ImgRaw&r=0'},
    { id: 3, name: 'Asia', city: 'Cairo' ,email:'asia@gmail.com',password:'35985649841',img:'https://th.bing.com/th/id/R.cd72edfd1c64ebbc533e7c012cb59382?rik=gY%2fOMpHqLCS7hw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6ip5BxABT.png&ehk=8aBmnLwHqf1TIAd%2bzRJPtKT18gHEiLNsM60dCHaE7Xw%3d&risl=&pid=ImgRaw&r=0'}
  ];
  private uploadedFile: File | null = null;

  constructor() { }

  setUploadedFile(file: File): void {
    this.uploadedFile = file;
  }

  getUploadedFile(): File | null {
    return this.uploadedFile;
  }    


  getAllData(): any[] {
    return this.data;
  }  

  deleteData(id: number): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getUserById(id: number): any {
    return this.data.find(item => item.id === id);
  }

  editData(id: number, newName: string, newCity: string): void {
    const user = this.data.find(item => item.id === id);
    if (user) {
      user.name = newName;
      user.city = newCity;
    }
  }

  addUser(user: any): void {
    const id = this.data.length + 1;
    const newUser = { id, ...user };
    this.data.push(newUser);
  }
}