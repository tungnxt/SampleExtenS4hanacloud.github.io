"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@nestjs/core");
const app_module = require("./app.module");
const passport = require('passport');
const xsenv = require('@sap/xsenv');
const JWTStrategy = require('@sap/xssec').JWTStrategy;

const port = process.env.PORT || 3000;
const services = xsenv.getServices({ uaa:'my-xsuaa' });
passport.use(new JWTStrategy(services.uaa));
async function bootstrap() {
    const app = await core.NestFactory.create(app_module.AppModule);
    app.use(passport.initialize());
    app.use(passport.authenticate('JWT', { session: false }))
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map