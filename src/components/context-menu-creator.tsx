import React from "react";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

type Trigger = {
    trigger: React.ReactElement
}

export const ContextMenuCreator = ({trigger} : Trigger) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <span>{trigger}</span>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <ContextMenuItem inset>Delete task
                    <ContextMenuShortcut>Ctrl+Shift+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem>Assign priority badge
                    <ContextMenuShortcut>Ctrl+Shift+B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}