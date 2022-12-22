import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EvenNumberDocument = EvenNumber;

@Schema()
export class EvenNumber {
  @Prop()
  value: number;
}

export const EvenNumberSchema = SchemaFactory.createForClass(EvenNumber);
