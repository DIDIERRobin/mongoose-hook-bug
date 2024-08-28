import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Test, TestSchema } from "./test.schema";
import { History, HistorySchema } from "./history.schema";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: History.name, schema: HistorySchema },
      { name: Test.name, schema: TestSchema }
    ])
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {
}
