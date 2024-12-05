import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formula',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent {
  productos = [
    { id: 1, nombre: 'Graniplas' },
    { id: 2, nombre: 'Mano Plas' },
    { id: 3, nombre: 'Pintura' }
    // Agrega más productos según sea necesario
  ];
  selectedProducto: number | null = null;
  ingredientes: { codigo: string; cantidad: number; unidad: string }[] = [];

  agregarIngrediente() {
    this.ingredientes.push({ codigo: '', cantidad: 0, unidad: 'GR' });
  }

  eliminarIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
  }

  guardarFormula() {
    if (!this.selectedProducto) {
      alert('Por favor, selecciona un producto.');
      return;
    }

    if (this.ingredientes.length === 0) {
      alert('Por favor, agrega al menos un ingrediente.');
      return;
    }

    // Construir el objeto fórmula
    const formula = {
      productoId: this.selectedProducto,
      ingredientes: this.ingredientes
    };

    console.log('Fórmula guardada:', formula);
    alert('Fórmula guardada exitosamente.');

    // Aquí puedes enviar la fórmula al backend
    // this.http.post('/api/formulas', formula).subscribe(response => { ... });
  }
}
