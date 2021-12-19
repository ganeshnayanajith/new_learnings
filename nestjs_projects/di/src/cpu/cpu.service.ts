import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  computer(a: number, b: number) {
    console.log('Drawing 10 watts of power from the Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
