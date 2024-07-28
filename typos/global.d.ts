namespace Mockup {
    interface ICard {
        id: string,
        firstName: string,
        lastName: string,
        description: string,
        role: string,
        profilePicture: string
    }

    interface IFreelancerProfile extends ICard {
        profileRating: number,
        lastEmploymentString: string,
        freelancerDomain: string,
        freelancerExpertise: string,
        timeEmployment: string,
        email: string,
        phone: string,
        instagram: string,
        twitter: string,
        website: string,
        gender: string,
        birthDate: string,
        birthPlace: string,
        languages: string,
        address: string,
        experience: string,
        academicCareer: string,
        skills: Array<string>
    }
};