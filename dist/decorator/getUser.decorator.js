"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req);
    console.log(req.user);
    return req.user['userId'];
});
//# sourceMappingURL=getUser.decorator.js.map