import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("slow")
  async getSlow(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 4));
    return this.appService.getSlow();
  }
}
