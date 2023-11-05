import { Module } from '@nestjs/common'
import { AngularUniversalModule } from '@nestjs/ng-universal'
import { join } from 'path'
import AppServerModule from '../src/main.server'
import { HealthController } from './health/health.controller'

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/teste-ssr/browser'),
    }),
  ],
  controllers: [HealthController],
})
export class AppModule {}