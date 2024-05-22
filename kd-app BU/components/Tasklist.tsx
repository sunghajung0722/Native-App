import React from 'react';


import { Task } from '@/components/Task';
import { FlatList } from 'react-native';

export interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TasksList({ tasks }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={String('test1')}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            style={{
                marginTop: 32
            }}
        />
    )
}