import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdateFormat'
})
export class BirthdateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }

    return `${formattedDate} (${age} éves)`;
  }
}
