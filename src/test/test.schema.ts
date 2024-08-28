import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import type { HydratedDocument } from "mongoose";
import { preSaveHook } from "./hook";

@Schema()
export class Test {
  @Prop({ type: String, required: true })
  title!: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);

export type TestDocument = HydratedDocument<Test>;

TestSchema.pre("save", preSaveHook);
