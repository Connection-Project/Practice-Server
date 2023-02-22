"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const typeorm_1 = require("typeorm");
const TodoList_entity_1 = require("./TodoList.entity");
const User_entity_1 = require("./User.entity");
let Calendar = class Calendar {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Calendar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Calendar.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.calendar, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entity_1.User)
], Calendar.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Calendar.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Calendar.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TodoList_entity_1.ToDoList, (todo) => todo.calendar, { cascade: true }),
    __metadata("design:type", Array)
], Calendar.prototype, "todo", void 0);
Calendar = __decorate([
    (0, typeorm_1.Entity)({ name: 'Calendar' }),
    __metadata("design:paramtypes", [Object])
], Calendar);
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.entity.js.map