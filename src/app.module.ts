import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ClinicsModule } from './clinics/clinics.module';
import { SpecialitiesModule } from './specialities/specialities.module';

@Module({
  imports: [UserModule, AuthModule, ClinicsModule, SpecialitiesModule],
})
export class AppModule {}
