import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DofusRessourceModule } from './dofus-ressource/dofus-ressource.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorieModule } from './dofus-categorie/dofus-categorie.module';
import config from './ormconfig';
import { DofusRessource } from './dofus-ressource/entities/dofus-ressouce.entity';
import { DofusCategorie } from './dofus-categorie/entities/dofus-categorie.entity';
import { DofusMonsterModule } from './dofus-monster/dofus-monster.module';
import {DofusMonster} from "./dofus-monster/entities/dofus-monster.entity";
import { DofusRecipesModule } from './dofus-recipes/dofus-recipes.module';
import { DofusWeaponsModule } from './dofus-weapons/dofus-weapons.module';
import { DofusIngredientsModule } from './dofus-ingredients/dofus-ingredients.module';

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
    DofusWeaponsModule,
    DofusIngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
