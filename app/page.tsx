import { FreelancerCard } from "@/components/freelancer-card";
import freelancerCards from "@/mockup/freelancerPageMockup";


export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto mt-14">
      <section className="space-y-2">
        <h2 className="px-4 lg:p-0 font-bold text-2xl md:text-3xl">Recommendations freelancers</h2>
        <p className="px-4 lg:p-0 font-light text-neutral-600 text-sm">Freelancers qui correspondent aux exigences du projet ou des taches spécifiques</p>
      </section>
      <section className="py-5 sm:py-0 mx-auto max-w-sm sm:max-w-7xl sm:my-8 flex flex-wrap justify-center gap-x-6 gap-y-6">
        {
          freelancerCards.map(e => (
            <FreelancerCard key={e.id} freelancer={e} />
          ))
        }
      </section>
    </main>
  );
}
