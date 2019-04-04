import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  getPath(suffix: string): string {
    return environment.URL_BACKEND + suffix;
  }

}
