import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icono',
  standalone: false
})
export class IconoPipe implements PipeTransform {

  transform(value: string): string {
    return value.startsWith('http') ? `🎵 ` : value;
  }

}
