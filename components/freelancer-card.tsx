import * as React from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

export function FreelancerCard() {
    return (
        <Card className="w-[400px] rounded-none">
            <CardHeader>
                card header
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            card content
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div>
                    card footer
                </div>
            </CardFooter>
        </Card>
    )
}
