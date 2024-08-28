import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Test } from "./test.schema";

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private readonly Test) {
  }

  async create(): Promise<void> {
    console.log("Calling Test.save()");
    const test = new this.Test({ title: "Coucou" });
    await test.save();
  }
}
