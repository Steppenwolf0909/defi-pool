import { Logger, Module } from "@nestjs/common";
import { PoolController } from './pool.controller';
import { PoolService } from './pool.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { WalletEntity } from "./entities/wallet.entity";
import { TransactionEntity } from "./entities/transaction.entity";
import { InvestmentEntity } from "./entities/investment.entity";


@Module({
  imports: [ TypeOrmModule.forFeature( [ WalletEntity, TransactionEntity, InvestmentEntity]),],
  controllers: [PoolController],
  providers: [PoolService, Logger],
})
export class PoolModule {}
