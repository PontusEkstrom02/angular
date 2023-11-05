export interface Task {
    id: number;
    title: string;
    description: DescriptionItem[];
    completed: boolean;
}
export interface DescriptionItem {
    text: string;
    completed: boolean;
  }