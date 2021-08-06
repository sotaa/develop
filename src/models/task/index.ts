export interface ITask {
  id: number;
  title: string;
  description: string;
  date: Date | string;
  done: boolean;
}
