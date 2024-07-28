import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { TiStarOutline } from "react-icons/ti";
import freelancerProfiles from "@/mockup/freelancerProfilesMockup";
import { findFreelancerProfile } from "@/lib/utils";

export default async function FreelancerPage({ params }: { params: { id: string } }) {
    const profile: Mockup.IFreelancerProfile | null = await findFreelancerProfile(freelancerProfiles, params.id);
    return (
        <div className="space-y-2 md:space-y-0 flex flex-row flex-wrap md:flex-nowrap max-w-5xl mx-auto space-x-4 my-2 md:h-[700px] py-4">
            <section className="max-w-md md:max-w-none mx-auto md:m-0 basis-full md:basis-1/3 border rounded-sm py-4 space-y-4">
                <div className="w-9/12 mx-auto flex flex-row space-x-4">
                    <div>
                        <Image
                            src={profile?.profilePicture || "/next.svg"}
                            width={90}
                            height={90}
                            alt="Picture of the freelancer"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 ml-2 justify-center">
                        <p className="font-extrabold text-xl tracking-normal">{profile?.firstName} {profile?.lastName}</p>
                        <p className="text-gray-500 text-sm font-light">{profile?.role}</p>
                        <div className="flex space-x-1">
                            <span className="text-yellow-500"><TiStarFullOutline /></span>
                            <span className="text-xs font-semibold">{profile?.profileRating}</span>
                        </div>
                    </div>
                </div>
                <div className="w-9/12 mx-auto  text-sm bg-gray-50 p-3">
                    <div className="flex flex-row space-x-4 justify-between my-1">
                        <p>
                            Emplois postulés
                        </p>
                        <p className="text-gray-500  ">
                            {profile?.lastEmploymentString}
                        </p>
                    </div>
                    <div className="border-b-[2px]"></div>
                    <p className="font-semibold my-1 ">
                        {profile?.freelancerDomain}
                    </p>
                    <div>
                        <p>{profile?.freelancerExpertise} • {profile?.timeEmployment}</p>
                    </div>
                </div>
                <div className="w-9/12 mx-auto flex flex-row space-x-1 text-primary">
                    <button className="basis-4/5 border text-sm  font-bold p-3">Planifier un entretien</button>
                    <button className="basis-1/5 border flex justify-center items-center text-2xl"><BiMessageAltDetail /></button>
                </div>
                <div className="border w-9/12 mx-auto"></div>
                <div className="w-9/12 mx-auto">
                    <p className="text-lg font-semibold">Contact</p>
                    <div className="space-y-3 mt-1 text-xs">
                        <div className="flex flex-col items-start gap-y-3">
                            <div className="flex flex-row space-x-1">
                                <div className="basis-1/6 flex justify-center">
                                    <MdOutlineMail size={17} />
                                </div>
                                <div className="basis-5/6">
                                    <p className=" text-gray-500 text-xs">Email</p>
                                    <div className="text-xs flex flex-row">
                                        {profile?.email}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <div className="basis-1/6 flex justify-center">
                                    <FaMobileAlt size={17} />
                                </div>
                                <div className="basis-5/6">
                                    <p className=" text-gray-500 text-xs">Phone</p>
                                    <div className="text-xs flex flex-row whitespace-nowrap	">
                                        {profile?.phone}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <div className="basis-1/6 flex justify-center">
                                    <BsInstagram size={17} />
                                </div>
                                <div className="basis-5/6">
                                    <p className=" text-gray-500 text-xs">Instagram</p>
                                    <div className="text-xs flex flex-row text-blue-600">
                                        {profile?.instagram}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <div className="basis-1/6 flex justify-center">
                                    <CiTwitter size={17} />
                                </div>
                                <div className="basis-5/6">
                                    <p className=" text-gray-500 text-xs">Twitter</p>
                                    <div className="text-xs flex flex-row text-blue-600">
                                        {profile?.twitter}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <div className="basis-1/6 flex justify-center">
                                    <TfiWorld size={17} />
                                </div>
                                <div className="basis-5/6">
                                    <p className=" text-gray-500 text-xs">Siteweb</p>
                                    <div className="text-xs flex flex-row text-blue-600">
                                        {profile?.website}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <p className="text-lg font-semibold">Evaluer</p>
                    <div className="mx-auto border my-1">
                        <div className="flex flex-row text-yellow-500 justify-center">
                            <TiStarFullOutline size={40} />
                            <TiStarFullOutline size={40} />
                            <TiStarFullOutline size={40} />
                            <TiStarFullOutline size={40} />
                            <TiStarOutline size={40} />
                        </div>
                    </div>
                </div>

            </section>
            <section className="max-w-md md:max-w-none basis-full md:basis-2/3 border rounded-sm space-y-4">
                <div className="border-b">
                    <div className="w-11/12 mx-auto ">
                        <p className="py-2 border-b-primary border-b-[3px] w-36 text-sm font-semibold tracking-wide">Profile d&apos;applicant</p>
                    </div>
                </div>
                <div className="w-11/12  mx-auto font-semibold">
                    <p className="py-2 text-base  tracking-wide">
                        Informations personnelles
                    </p>
                    <div className="flex flex-row space-x-2">
                        <div className="basis-1/2 space-y-4 text-sm font-semibold">
                            <div className="space-y-1">
                                <p className="text-gray-500">Nom complet</p>
                                <p>{profile?.firstName} {profile?.lastName}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500">{profile?.birthDate}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500">Address</p>
                                <p>{profile?.address}</p>
                            </div>
                        </div>
                        <div className="basis-1/2 space-y-4 text-sm">
                            <div className="space-y-1">
                                <p className="text-gray-500">Sex</p>
                                <p>{profile?.gender}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500">Language</p>
                                <p>{profile?.languages}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-1">
                    <div className="border"></div>
                </div>
                <div className="w-11/12 mx-auto font-semibold">
                    <p className="py-2 text-base  tracking-wide">
                        Informations professionel
                    </p>
                    <div className="flex flex-row text-sm space-x-1">
                        <div className="space-y-2">
                            <p className="text-gray-500">à propos</p>
                            <div className="font-semibold space-y-1">
                                <p>{profile?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pt-4">
                        <div className="basis-1/2 space-y-3 font-semibold text-sm">
                            <div className="space-y-1">
                                <p className="text-gray-500">Actuellement</p>
                                <p>{profile?.role}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500">Plus haute qualification obtenue</p>
                                <p>{profile?.academicCareer}</p>
                            </div>
                        </div>
                        <div className="basis-1/2 space-y-3 text-sm">
                            <div className="space-y-1">
                                <p className="text-gray-500">Experience</p>
                                <p>{profile?.experience}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-500">Skills</p>
                                <div className="flex flex-row space-x-3 flex-wrap text-primary">
                                    {
                                        profile?.skills.map((skill) => (
                                            <p>{skill}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}