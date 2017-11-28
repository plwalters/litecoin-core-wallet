import {HttpClient} from 'aurelia-http-client';
import {Session} from 'services/session';

export class HttpWrapper {
  private http: HttpClient;
  private session: Session;

  static inject = [Session];
  constructor(session) {
    this.session = session;
    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl(`http://localhost:19332/`);
      });
  }

  get(path) {
    return this.http.get(path).then(result => {
      return result.content;
    });
  }
  post(path, body) {
    return this.http.post(path, body);
  }
  patch(path, body) {
    return this.http.patch(path, body);
  }
  delete(path) {
    return this.http.delete(path);
  }
}
