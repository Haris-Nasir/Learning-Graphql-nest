import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book') // Resolver need decorators and with the help of decorators we write resolver
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      { id: 1, title: 'First Book', price: 500 },
      { id: 2, title: 'Second Book', price: 1000 },
      { id: 3, title: 'Third Book', price: 1500 },
    ];
  }
}
