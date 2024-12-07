import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventory = [
    { name: 'T1', quantity: '250GR', stock: 100, minStock: 50 },
    { name: 'P2', quantity: '350GR', stock: 150, minStock: 75 }
  ];

  selectedItem: any = null;
  showCreateModal = false;
  newChemical = { name: '', quantity: '', stock: 0, minStock: 0 };

  // Editar un químico
  editStock(item: any) {
    this.selectedItem = { ...item };  // Clonar el químico seleccionado
  }

  // Guardar cambios en el químico seleccionado
  saveStock() {
    const index = this.inventory.findIndex(item => item.name === this.selectedItem.name);
    if (index !== -1) {
      this.inventory[index] = { ...this.selectedItem };  // Actualizar el inventario
    }
    this.closeModal();  // Cerrar modal
  }

  closeModal() {
    this.selectedItem = null;
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.resetNewChemical();
  }

  // Agregar un nuevo químico al inventario
  addChemical() {
    if (this.newChemical.name && this.newChemical.quantity) {
      this.inventory.push({ ...this.newChemical });
      this.closeCreateModal();
    }
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  resetNewChemical() {
    this.newChemical = { name: '', quantity: '', stock: 0, minStock: 0 };
  }
}
