import { BoardRepository } from 'src/repositories/board.repository';
import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
export declare class CommentService {
    private readonly boardCommentRepository;
    private readonly boardRepository;
    private readonly userRepository;
    constructor(boardCommentRepository: BoardCommentRepository, boardRepository: BoardRepository, userRepository: UserRepository);
    create(userId: number, body: CreateCommentReqDto): Promise<any>;
    getBoardComments(boardId: number): Promise<any>;
}
