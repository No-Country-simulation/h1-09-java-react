export const hikariConfig = {
    hikari: {
        minimumIdle: 5,
        maximumPoolSize: 20,
        idleTimeout: 30000,
        maxLifetime: 2000000,
        connectionTimeout: 30000,
        poolName: "MyHikariPool",
    }
};