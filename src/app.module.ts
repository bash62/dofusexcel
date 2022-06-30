import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DofusRessourceModule } from './dofus-ressource/dofus-ressource.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorieModule } from './dofus-categorie/dofus-categorie.module';
import { DofusObjectModule } from './dofus-object/dofus-object.module';
import config from './ormconfig';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    DofusRessourceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    DofusCategorieModule,
    DofusObjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
