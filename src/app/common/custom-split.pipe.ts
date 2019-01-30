import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSplit'
})
export class CustomSplitPipe implements PipeTransform {

  transform(toBeSplit: string, splitFormat: string, separator: string): string {
    return null;
  }

}
