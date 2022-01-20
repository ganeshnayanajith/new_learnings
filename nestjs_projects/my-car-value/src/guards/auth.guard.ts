import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const userId = request.session.userId;
    console.log(`current logged in user id : ${userId}`);
    return userId;
  }
}
