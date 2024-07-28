import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function findFreelancerProfile(L: Array<Mockup.IFreelancerProfile>, x: string): Promise<Mockup.IFreelancerProfile | null> {
  return new Promise((resolve, reject) => {
      const existingProfile = L.find((e) => e.id === x);
      if (existingProfile) {
          resolve(existingProfile);
      } else {
          reject(null);
      }
  })
}