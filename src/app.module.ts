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
import { DofusObject } from './dofus-object/entities/dofus-object.entity';
import { DofusRessource } from './dofus-ressource/entities/dofus-ressouce.entity';
import { DofusCategorie } from './dofus-categorie/entities/dofus-categorie.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [DofusObject, DofusRessource, DofusCategorie],
      synchronize: true,
      logging: true,
    }),
    DofusObjectModule,
    DofusRessourceModule,
    DofusCategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
