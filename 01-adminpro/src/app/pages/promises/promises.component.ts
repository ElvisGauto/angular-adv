import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promise = new Promise(( resolve, reject ) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('salió mal');
    //   }
    // });
    // promise.then((msj)  => {
    //   console.log(msj);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    // console.log('fin');

    this.getUsers().then( users => {
      console.log(users);
    })
  }

  getUsers() {
    const promise = new Promise(resolve =>  {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res  => resolve(res.data));
    });

    return promise;
  }

}
