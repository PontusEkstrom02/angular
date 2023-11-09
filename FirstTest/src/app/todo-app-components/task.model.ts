export interface Task {
    id: number;
    title: string;
    description: DescriptionItem[];
    priority: string;
    completed: boolean;
}
export interface DescriptionItem {
    text: string;
    completed: boolean;
    note: string;
    showNote: boolean;
  }