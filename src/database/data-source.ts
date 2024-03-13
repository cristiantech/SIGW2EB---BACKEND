import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions  = {
  type: 'postgres',
  url: 'postgres://admin:pass1234KC@localhost:5432/empresa',
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;