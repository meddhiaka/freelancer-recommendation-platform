"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavigationBar() {
    const pathname: string = usePathname();
    return (
        <div className="max-w-screen-xl mx-auto my-5">
            <nav className="flex space-x-8">
                <div className="text-4xl font-medium">
                    <Link
                        href="/"
                        prefetch={true}
                    >
                        LOGO
                    </Link>
                </div>
                <ul className="flex space-x-7 items-center">
                    <li>
                        <Link
                            className={`${pathname == "/" ? "text-primary underline decoration-2" : ""}  font-semibold text-sm`}
                            href="/"
                            prefetch={true}
                        >
                            Freelancers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname == "/msgs" ? "text-primary underline decoration-2" : ""}  font-semibold text-sm`}
                            href="/msgs"
                            prefetch={true}
                        >
                            Messages
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}