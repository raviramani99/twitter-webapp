import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecureService {

  
  constructor(private http: HttpClient) {
    this.getWOEID().subscribe(data => {
    });

  }
  createAuthorizationHeader(headers: HttpHeaders) {
    let now = new Date();
    headers.append('Authorization', 'OAuth oauth_consumer_key="fdiQYs0d6RAQie2evCeY6vJkr",oauth_token="1282977535-zDfcnIwa6i9q2vghqbXBIw0V1vQ7cFxyduwwEss",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1574874587",oauth_nonce="f747ob",oauth_version="1.0",oauth_signature="buF7AfhJAnXs2jU0Ughw245IrQY%3D"');
  }

  public getWOEID(): Observable<any> {
    return this.http.get("./assets/woeid.json");
  }

  getTrendingHasTags(woeid) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://api.twitter.com/1.1/trends/place.json?id=' + woeid, { headers: headers }).pipe(map((res: Response) => res.json()))
  }
}
