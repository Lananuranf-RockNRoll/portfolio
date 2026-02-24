import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div className="bg-black text-white min-h-screen">
            {children}
        </div>
    );
}