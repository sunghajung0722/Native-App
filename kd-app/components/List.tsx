import React from 'react';
import { FlatList } from 'react-native';


import { TaskItem } from '../components/Task';
import { ItemWrapper } from './Item';

export interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
    editTask: ({ taskId, taskNewTitle }) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask, editTask }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <ItemWrapper index={index}>
                        <TaskItem
                            task={item}
                            editTask={editTask}
                            toggleTaskDone={toggleTaskDone}
                            removeTask={removeTask}
                        />
                    </ItemWrapper>
                )
            }}
            style={{
                marginTop: 32
            }}
        />
    )
}