import { IconRotate2 } from "@tabler/icons-react";

export default function Loading() {
    return (
        <div className="h-full flex-col lg:flex-col items-center justify-between p-12">
            <IconRotate2 className="w-12 h-12 text-blue-500 animate-spin" />
        </div>
    )
}