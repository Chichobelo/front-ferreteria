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
    { name: 'T1', stock: 100, minStock: 50, unit: 'gr' },
    { name: 'P2', stock: 150, minStock: 75, unit: 'kl' }
  ];

  selectedItem: any = null;
  showCreateModal = false;
  newChemical = { name: '', stock: 0, minStock: 0, unit: 'gr' };
  searchTerm: string = '';

  getFilteredComponents() {
    return this.searchTerm
      ? this.inventory.filter(item =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : this.inventory;
  }

  editStock(item: any) {
    this.selectedItem = { ...item };
  }

  saveStock() {
    const index = this.inventory.findIndex(item => item.name === this.selectedItem.name);
    if (index !== -1) this.inventory[index] = { ...this.selectedItem };
    this.closeModal();
  }

  deleteChemical(item: any) {
    this.inventory = this.inventory.filter(chemical => chemical !== item);
  }

  addChemical() {
    if (this.newChemical.name && this.newChemical.stock > 0) {
      this.inventory.push({ ...this.newChemical });
      this.closeCreateModal();
    }
  }

  closeModal() {
    this.selectedItem = null;
  }

  closeCreateModal() {
    this.newChemical = { name: '', stock: 0, minStock: 0, unit: 'gr' };
    this.showCreateModal = false;
  }

  openCreateModal() {
    this.showCreateModal = true;
  }
}
