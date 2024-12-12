import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creacion-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css'],
})
export class CreacionProductoComponent {
  unidades = ['Kilogramo', 'Litro', 'Unidad'];
  componentes: any[] = [];
  nuevoComponente = { nombre: '', categoria: '', cantidad: 0, imagen: '' };
  filtro: string = ''; // Término de búsqueda
  editIndex: number | null = null;
  imagenProducto: string | null = null;
  modalAbierto = false;

  // Abrir modal
  abrirModal() {
    this.nuevoComponente = { nombre: '', categoria: '', cantidad: 0, imagen: '' };
    this.editIndex = null;
    this.modalAbierto = true;
  }

  // Cerrar modal
  cerrarModal() {
    this.modalAbierto = false;
  }

  // Obtener productos filtrados
  get productosFiltrados(): any[] {
    if (!this.filtro.trim()) {
      return this.componentes;
    }
    return this.componentes.filter((producto) =>
      producto.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  // Crear o actualizar producto
  crearComponente() {
    if (this.editIndex !== null) {
      this.componentes[this.editIndex] = { ...this.nuevoComponente };
    } else {
      this.componentes.push({ ...this.nuevoComponente });
    }
    this.cerrarModal();
  }

  // Editar producto
  editarComponente(index: number) {
    this.nuevoComponente = { ...this.componentes[index] };
    this.editIndex = index;
    this.modalAbierto = true;
  }

  // Eliminar producto
  eliminarComponente(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.componentes.splice(index, 1);
    }
  }

  // Seleccionar imagen
  seleccionarImagen(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenProducto = reader.result as string;
        this.nuevoComponente.imagen = this.imagenProducto;
      };
      reader.readAsDataURL(file);
    }
  }
}