//declarando o tipo userId do data
declare namespace Express{
    export interface Request {
        userId: string;
    }
}