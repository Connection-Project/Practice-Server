import { Request } from 'express';
import { UserService } from './user.service';
import { RegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    emailSignUp(body: RegistUserReqDto): Promise<any>;
    getInfo(req: Request): Promise<any>;
    update(req: Request, body: UpdateUserReqDto): Promise<any>;
    delete(req: Request): Promise<any>;
}