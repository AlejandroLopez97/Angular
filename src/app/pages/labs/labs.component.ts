import { Component, signal } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear Componentes'
  ];
  nombre = signal('Alejandro');
  edad = 26;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  persona = {
    nombre: 'Alejandro',
    edad: 27,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola');
  }

  changerHander(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.nombre.set(newValue); //para capturar el valor del signal y aignarlo a la variable
    console.log(event);
  }

  keydownHander(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
