import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TestSchema } from "./test.schema";
import type { Test } from "./test.schema";

@Schema()
export class History {
  @Prop({ type: Number, required: true })
  version: number;

  @Prop({ type: TestSchema, required: true })
  test: Test;
}

export const HistorySchema = SchemaFactory.createForClass(History);