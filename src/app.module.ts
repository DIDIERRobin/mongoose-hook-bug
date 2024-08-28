import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestModule } from "./test/test.module";

@Module({
  imports: [
    MongooseModule.forRootAsync(
      {
        useFactory: () => ({
          uri: process.env.MONGODB_URI
        })
      }),
    TestModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
