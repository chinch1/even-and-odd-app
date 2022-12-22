import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class OddNumber {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  value: number;
}
