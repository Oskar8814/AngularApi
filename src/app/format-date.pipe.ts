import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: false
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return 'Fecha no disponible';
    
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

}
