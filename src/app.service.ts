import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getSlow(): string {
    return "Slow World!";
  }
}
