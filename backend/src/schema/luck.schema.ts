import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type LuckDocument = HydratedDocument<Luck>;

@Schema()
export class Luck {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  day: number;
}

export const LuckSchema = SchemaFactory.createForClass(Luck);
