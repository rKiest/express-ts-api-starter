export = {
    // import swaggerDefinitions
    swaggerDefinition: {
        info: {
            title: 'Node Swagger API',
            version: '1.0.0',
            description: 'api-example RESTful API with Swagger',
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    // path to the API docs
    apis: ['./**/src/routes/**/*.js'],
};
