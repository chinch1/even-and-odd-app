import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OddNumberDocument = HydratedDocument<OddNumber>;

@Schema()
export class OddNumber {
  @Prop()
  value: number;
}

export const OddNumberSchema = SchemaFactory.createForClass(OddNumber);
