export default {
    type: 'cockroachdb',
    url: "postgresql://sayar:hoxgjQRa-3rdBEMwUMeKxw@free-tier12.aws-ap-south-1.cockroachlabs.cloud:26257/auther3?sslmode=verify-full&options=--cluster%3Dmusic-streaming-db-1377",
    ssl: true,
    extra: {
      options: "--cluster%3Dmusic-streaming-db-1377",
    },
    migrationsTableName: 'migrations',
    synchronize:true,
    entities: [
        "src/models/**/*.ts"
    ],
    migrations: [
         "src/migrations/**/*.ts"
    ],
    cli: {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migrations",
    }
};

