import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    {
      id: 2,
      name: 'Graniplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'MA16', quantity: '160KG' },
        { name: 'RA19', quantity: '16KG' },
        { name: 'R6', quantity: '200GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
    },
  
  ];

  selectedProduct: any = null; // Producto seleccionado para empacar
  operatorId: string = ''; // ID del operador
  packages: Array<{ type: string; quantity: number }> = []; // Lista dinámica de tipos de empaques y cantidades
  viewFormulaProduct: any = null; // Producto seleccionado para ver fórmula

  // Método para mostrar la ventana de fórmula
  viewFormula(product: any) {
    this.viewFormulaProduct = product;
  }

  // Método para cerrar la ventana de fórmula
  closeFormula() {
    this.viewFormulaProduct = null;
  }

  // Método para seleccionar el producto para empacar
  selectProduct(product: any) {
    this.selectedProduct = product;
    this.packages = []; // Reiniciar los empaques al seleccionar un nuevo producto
  }

  // Método para agregar un nuevo empaque
  addPackage() {
    this.packages.push({ type: 'un cuarto', quantity: 0 }); // Agregar un empaque inicial
  }

  // Método para eliminar un empaque
  removePackage(index: number) {
    this.packages.splice(index, 1); // Eliminar el empaque en la posición indicada
  }

  // Método para registrar la producción
  registerProduction() {
    console.log('Producción registrada:', {
      product: this.selectedProduct,
      operatorId: this.operatorId,
      packages: this.packages,
    });

    // Reiniciar los valores después de registrar
    this.operatorId = '';
    this.packages = [];
    this.selectedProduct = null;
  }

  // Método para cerrar la ventana de empacar
  closePacking() {
    this.selectedProduct = null;
    this.packages = [];
  }
}
