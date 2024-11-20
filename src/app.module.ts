import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './Book/book.module';
import { join } from 'path';
@Module({
  imports: [
    //GraphQLModule used to setup and integrate graphql functionaities with nest js
    GraphQLModule.forRoot({
      //.forRoot for other parameters to include to configure graphql functionalities
      driver: ApolloDriver,
      playground: true, //To enable graphql queries test platform. This will true in localhost & false on production
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'), //Graphql will read our decorator file and will make schema on this path
      // typePaths: ['./**/*.graphql'], // To accept the graphql schema as .graphql in a project
      definations: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
