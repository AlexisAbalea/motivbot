import { Lettre } from "src/entities/lettre.entity";
import { DataSource } from "typeorm";

export const lettreProviders = [
    {
      provide: 'LETTRE_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Lettre),
      inject: ['DATA_SOURCE'],
    },
  ];