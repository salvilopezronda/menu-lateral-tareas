import { Component, OnInit } from '@angular/core';
import { Tarea } from './model/tarea.model';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listaTareas: Tarea[] = [
    new Tarea({
      id: 1,
      titulo: 'Hacer la compra',
      descripcion: 'Comprar los ingredientes para cocinar la cena',
      estado: 1,
      tipologia: 1,
      fecha:'15/05/2023 12:01m '
    }),
    new Tarea({
      id: 2,
      titulo: 'Limpiar el garaje',
      descripcion: 'Ordenar y limpiar el garaje',
      estado: 2,
      tipologia: 2,
      fecha:'15/05/2023 12:05m '
    }),
    new Tarea({
      id: 3,
      titulo: 'Hacer ejercicio',
      descripcion: 'Ir al gimnasio y hacer una rutina de ejercicios',
      estado: 3,
      tipologia: 3,
      fecha:'15/05/2023 12:32m '
    }),
    new Tarea({
      id: 4,
      titulo: 'Estudiar para el examen',
      descripcion: 'Repasar los apuntes y hacer ejercicios prácticos',
      estado: 2,
      tipologia: 4,
      fecha:'15/05/2023 12:41m '
    }),
    new Tarea({
      id: 5,
      titulo: 'Enviar el informe',
      descripcion: 'Enviar el informe mensual al supervisor',
      estado: 1,
      tipologia: 1,
      fecha:'15/05/2023 12:45m '
    }),
    new Tarea({
      id: 6,
      titulo: 'Llamar al médico',
      descripcion: 'Hacer una cita para el chequeo anual',
      estado: 2,
      tipologia: 1,
      fecha:'15/05/2023 12:50m '
    }),
    new Tarea({
      id: 7,
      titulo: 'Revisar el correo electrónico',
      descripcion: 'Responder a los correos importantes',
      estado: 3,
      tipologia: 3,
      fecha:'15/05/2023 12:41m '
    }),
   // Agrega las tareas restantes aquí...
  ];

  title = 'listaTareas';
  selectedDate: string = '';
  ngOnInit(): void {
    this.initializeCalendar();
  }
  getColorCaja(estado: any): string {
    // Lógica para determinar el color en función del estado
    if (estado === 2) {
      return '#ABEBC6'; // Cambiar al color deseado
    } else if (estado === 1) {
      return '#F8C471'; // Cambiar al color deseado
    } else if (estado === 3) {
      return '#EC7063'; // Cambiar al color deseado
    } else {
      return 'transparent'; // Cambiar al color deseado por defecto
    }
  }

  getColorTitulo(tipologia: any): string {
    // Lógica para determinar el color en función del estado
    if (tipologia === 1) {
      return 'black'; // Cambiar al color deseado
    } else if (tipologia === 2) {
      return 'blue'; // Cambiar al color deseado
    } else if (tipologia === 3) {
      return '#1E8449'; // Cambiar al color deseado
    } else if (tipologia === 4) {
      return '#7D3C98'; // Cambiar al color deseado
    } else {
      return 'transparent'; // Cambiar al color deseado por defecto
    }
  }

  initializeCalendar() {
    const fechaActual = new Date().toString();
    this.selectedDate = moment(fechaActual, 'DD-MM-YYY').format('YYYY-MM-DD');
  }
}
