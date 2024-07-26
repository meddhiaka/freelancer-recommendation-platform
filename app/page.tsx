import { FreelancerCard } from "@/components/freelancer-card";
import freelancerCards from "@/mockup/freelancerPageMockup";


export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto mt-14">
      <section className="space-y-2">
        <h2 className="font-bold text-3xl">Recommendations freelancers</h2>
        <p className="font-light text-neutral-600 text-sm">Freelancers qui correspondent aux exigences du projet ou des taches spécifiques</p>
      </section>
      <section className="my-8 flex flex-wrap gap-x-6 gap-y-6">
        {
          freelancerCards.map(e => (
            <FreelancerCard key={e.id} freelancer={e} />
          ))
        }
      </section>
    </main>
  );
}
