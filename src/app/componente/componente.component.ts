
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  unidades = ['Kilogramo', 'Litro', 'Unidad'];
  componentes: any[] = [];
  nuevoComponente = { nombre: '', unidad: '', cantidad: 0, costo: '' };
  editIndex: number | null = null;

  crearComponente() {
    if (this.editIndex !== null) {
      this.componentes[this.editIndex] = { ...this.nuevoComponente };
      this.editIndex = null;
    } else {
      this.componentes.push({ ...this.nuevoComponente });
    }
    this.nuevoComponente = { nombre: '', unidad: '', cantidad: 0, costo: '' };
  }

  editarComponente(index: number) {
    this.nuevoComponente = { ...this.componentes[index] };
    this.editIndex = index;
  }

  eliminarComponente(index: number) {
    this.componentes.splice(index, 1);
  }
}
