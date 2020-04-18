import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public alerta:AlertController) {

    }
  
  valor = '';


  pushSegunda(){
    this.router.navigate(['/segunda', this.valor]);
  }

  async alertaBasica(){
    let miAlerta = this.alerta.create({
      header: 'Este es el header de la alerta',
      message: 'Este es el mensaje de la alerta',
      buttons:['Entendido']
    });
    (await miAlerta).present();


  }

}
