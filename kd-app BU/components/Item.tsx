import React, { ReactNode } from 'react';
import { View } from 'react-native';


interface ItemWrapperProps {
    index: number;
    children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
    if (index % 2 === 0)
        return (

            { children }

        )

    return (
        <View
            style={{ flex: 1 }}
        >
            {children}
        </View>
    )
}