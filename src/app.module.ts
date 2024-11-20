import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './Book/book.module';
@Module({
  imports: [
    //GraphQLModule used to setup and integrate graphql functionaities with nest js
    GraphQLModule.forRoot({
      //.forRoot for other parameters to include to configure graphql functionalities
      driver: ApolloDriver,
      playground: true, //To enable graphql queries test platform. This will true in localhost & false on production
      typePaths: ['./**/*.graphql'], // To accept the graphql schema as .graphql in a project
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
