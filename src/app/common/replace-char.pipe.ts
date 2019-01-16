import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChar'
})
export class ReplaceCharPipe implements PipeTransform {

  transform(value: string, toReplace: string, replaceWith: string): string {
    return value.split(toReplace).join(replaceWith);
  }

}
