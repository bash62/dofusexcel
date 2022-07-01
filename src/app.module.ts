import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DofusRessourceModule } from './dofus-ressource/dofus-ressource.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorieModule } from './dofus-categorie/dofus-categorie.module';
import config from './ormconfig';
import { DofusMonsterModule } from './dofus-monster/dofus-monster.module';
import { DofusWeaponsModule } from './dofus-weapons/dofus-weapons.module';
import { DofusRecipesModule } from './dofus-recipes/dofus-recipes.module';
import { DofusQuantitiesModule } from './dofus-quantities/dofus-quantities.module';

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
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    DofusRessourceModule,
    DofusMonsterModule,
    DofusCategorieModule,
    DofusRecipesModule,
    DofusQuantitiesModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
