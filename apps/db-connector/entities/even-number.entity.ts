import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class EvenNumber {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  value: number;
}
