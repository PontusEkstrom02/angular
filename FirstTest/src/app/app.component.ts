import { Component } from '@angular/core';
import { DescriptionItem, Task } from './todo-app-components/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'FirstTest';
  tasks: Task[] = [
    {
      id: 1,
      title: 'Uppgrade todo list',
      description: [
        { text: 'Task Prioritization', completed: true, note: 'Allow users to prioritize tasks (e.g., high, medium, low priority) and display them accordingly.', showNote: false },
        { text: 'Task Categories', completed: false, note: 'Implement task categories or tags to help users organize tasks based on different aspects of their life or work.', showNote: false },
        { text: 'Due Dates and Reminders', completed: false, note: 'Enable users to set due dates and reminders for tasks. Implement notifications or emails to remind users of upcoming tasks.', showNote: false },
        { text: 'Task Notes', completed: false, note: 'Allow users to add additional notes or descriptions to tasks to provide more context.', showNote: false },
        { text: 'Subtasks', completed: false, note: 'Implement subtasks within tasks. Users can break down larger tasks into smaller, manageable subtasks.', showNote: false },
        { text: 'Task Comments', completed: false, note: 'Enable users to leave comments or feedback on tasks, facilitating collaboration in team-based projects.', showNote: false },
        { text: 'Task Sharing', completed: false, note: 'Implement task sharing features, allowing users to share tasks with others via email or social media.', showNote: false },
        { text: 'Task Reordering', completed: false, note: 'Allow users to reorder tasks by drag-and-drop functionality to customize the task list according to their preference.', showNote: false },
        { text: 'Archiving Completed Tasks', completed: false, note: 'Provide an option for users to archive or move completed tasks to a separate section, keeping the main list uncluttered.', showNote: false },
        { text: 'Search Functionality', completed: false, note: 'Implement a search bar that allows users to search for specific tasks based on keywords or categories.', showNote: false },
        { text: 'Data Persistence', completed: false, note: 'Add data persistence using local storage or a backend database to ensure tasks are saved even when the user refreshes the page or closes the app.', showNote: false },
        { text: 'User Accounts', completed: false, note: 'Implement user authentication and user accounts, enabling users to log in, save their tasks securely, and access them from multiple devices.', showNote: false },
        { text: 'Dark Mode', completed: false, note: 'Add a dark mode option to your app, allowing users to switch between light and dark themes based on their preference.', showNote: false },
        { text: 'Task History', completed: false, note: 'Keep a history of completed tasks, showing users their accomplishments over time.', showNote: false },
        { text: 'Task Statistics', completed: false, note: 'Provide users with statistics such as the number of completed tasks per day, week, or month, encouraging productivity.', showNote: false }
      ],
      priority: 'high',
      completed: false
    },
    {
      id: 2,
      title: 'Example',
      description: [
        { text: 'Make a example list', completed: true, note: '', showNote: false },
        { text: 'Make a example item', completed: true, note: '', showNote: false }
      ],
      priority: 'medium',
      completed: false
    },
    {
      id: 3,
      title: 'test title',
      description: [
        { text: 'test item', completed: true, note: 'test note', showNote: true }
      ],
      priority: 'low',
      completed: false
    }
  ];

  onTaskAdded(task: { title: string, description: DescriptionItem[], priority: string}): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: task.title,
      description: task.description,
      priority: task.priority,
      completed: false
    };
    this.tasks.push(newTask);
  }
  
}
