import { CloudinaryResource } from "@/types/cloudinary";
import { useQuery } from "@tanstack/react-query";

interface UseResources {
  initialResources: Array<CloudinaryResource>;
}

export function useResources(options: UseResources) {
  const { data: resources } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const { data } = await fetch("/api/resources").then((r) => r.json());
      return data;
    },
    initialData: options?.initialResources,
  });

  return {
    resources,
  };
}
