import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport from 'passport';
import xsenv from '@sap/xsenv';
import { JWTStrategy } from '@sap/xssec';

const services = xsenv.getServices({ uaa: 'my-xsuaa' });
passport.use(new JWTStrategy(services.uaa));

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(passport.initialize());
  app.use(passport.authenticate('JWT', { session: false }));
  await app.listen(port);
}
bootstrap();
