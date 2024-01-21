export interface ITask {
    name: string;
}

export interface ITaskResponse extends ITask {
    id: number | string;
}