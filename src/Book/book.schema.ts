import { Field, Int, ObjectType } from '@nestjs/graphql';
//Field, Int, ObjectType are decorators
@ObjectType() //This decorator will tell that its gonna be schema of name book with three fields id,title and price
export class Book {
  @Field((type) => Int)
  id: number;

  @Field()
  title: String;

  @Field((type) => Int, { nullable: true })
  price: number;
}
