import { Injectable } from '@angular/core';
import departmentsData from '../departments.json';

interface Department {
  id: string;
  name: string;
  capital: string;
  area: string;
  festivals: string[];
  population: string;
}

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private readonly defaultMessage =
    'Esta ventana es arrastrable. Puedes colocarla en cualquier lugar que quieras. Acerca el cursor a un departamento para visualizar información básica.';

  private readonly departments: Record<string, Department> = departmentsData;

  getDefaultMessage(): string {
    return this.defaultMessage;
  }

  getDepartmentInfo(id: string): Department | null {
    return this.departments[id] ?? null;
  }

  getDepartmentHtmlInfo(id: string): string {
    const dept = this.getDepartmentInfo(id);
    if (!dept) return this.defaultMessage;

    return `
      <h3>${dept.name}</h3>
      <p><strong>Cabecera departamental:</strong> ${dept.capital}</p>
      <p><strong>Extensión territorial:</strong> ${dept.area}</p>
      <p><strong>Fechas de fiestas patronales:</strong><br>
        ${dept.festivals.map(f => `- ${f}`).join('<br>')}
      </p>
      <p><strong>Número de habitantes:</strong> ${dept.population}</p>
    `;
  }
}
