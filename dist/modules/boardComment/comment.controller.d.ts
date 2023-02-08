import { Request } from 'express';
import { CommentService } from './comment.service';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReqDto } from './dto/req/update.req.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(req: Request, body: CreateCommentReqDto): Promise<any>;
    getBoardComments(req: Request, boardId: number): Promise<any>;
    update(req: Request, commentId: number, body: UpdateBoardCommentReqDto): Promise<any>;
    delete(req: Request, commentId: number): Promise<any>;
}
