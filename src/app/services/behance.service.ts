import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BehanceService {

  // tslint:disable-next-line:variable-name
  behance_api_url: string;

  constructor(private http: HttpClient) {
    this.behance_api_url = 'https://www.behance.net/v2/users/Abdo-Host/projects?api_key=XkdIqoC84eTbW55NUWXS3Eudym6rgBQw';
  }

  getPortfolio() {
    return this.http.jsonp(this.behance_api_url, 'callback');
  }
}
