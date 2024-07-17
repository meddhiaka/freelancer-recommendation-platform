import * as React from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"

export function FreelancerCard({freelancer}: {freelancer: Mockup.ICard}) {
    return (
        <Card className="w-[400px] rounded-none space-y-1">
            <CardHeader className="pt-2 pb-3 px-3 flex flex-row justify-between">
                <Image
                    src={freelancer.profilePicture}
                    width={80}
                    height={80}
                    alt="Picture of the freelancer"
                    className="rounded-full"
                />
                <Button
                    variant="secondary"
                    className="font-bold text-lg rounded-none text-primary"
                >
                    Voir
                </Button>
            </CardHeader>
            <CardContent className="py-1 px-3">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col font-bold text-2xl">
                            {freelancer.firstName}
                        </div>
                        <div className="flex flex-col text-base">
                            {freelancer.description}
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="pt-3 px-3 pb-4 flex justify-between">
                <div>
                    <Badge className="text-primary border-primary text-sm py-1 rounded-lg" variant="outline">
                        {freelancer.role}
                    </Badge>
                </div>
            </CardFooter>
        </Card>
    )
}
