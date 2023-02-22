import { BoardComment } from './BoardComment.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Board } from './Board.entity';
import { MyPet } from './MyPets.entity';
import { BoardCommentReply } from './BoardCommentReply.entity';
import { Feed } from './Feed.entity';
import { FeedComment } from './FeedComment.entity';
import { Calendar } from './Calendar.entity';

@Entity({ name: 'Users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    name: string;

    @Column()
    nickName: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    accountId: string;

    @Column()
    registType: string;

    @Column({ nullable: true })
    imageKey: string;

    @Column({ nullable: true })
    imagePath: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => MyPet, (pet) => pet.user, { cascade: true })
    pet: MyPet[];

    @OneToMany(() => Board, (board) => board.user)
    board: Board[];

    @OneToMany(() => BoardComment, (comment) => comment.user)
    comment: BoardComment[];

    @OneToMany(() => BoardCommentReply, (reply) => reply.user)
    reply: BoardCommentReply[];

    @OneToMany(() => Feed, (feed) => feed.user, { cascade: true })
    feed: Feed[];

    @OneToMany(() => FeedComment, (comment) => comment.user)
    feedComment: FeedComment[];

    @OneToMany(() => Calendar, (calendar) => calendar.user, { cascade: true })
    calendar: Calendar[];

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}
