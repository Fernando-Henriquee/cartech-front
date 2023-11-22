import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({

  providedIn: "root"

})

export class LoginService {

  constructor(private HttpClient: HttpClient) {

  }

  private readonly baseURL = environment["endPoint"]

  login(dados: any) {
    return this.HttpClient.post<any>(`${this.baseURL}/login`, dados);
  }

}
