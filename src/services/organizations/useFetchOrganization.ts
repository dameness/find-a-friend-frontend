import { api } from "@/config/api";
import { Organization } from "@/types/organizations";
import { useQuery } from "@tanstack/react-query";

const fetchOrganization = async (id: string): Promise<Organization | null> => {
  if (!id) return null;

  const response = await api.get(`/organizations/${id}`);

  return response.data.organization;
};

export const useFetchOrganization = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["organization", id],
    queryFn: () => fetchOrganization(id),
    select: (data) => {
      if (data)
        return {
          ...data,
          address: `${data.street}, ${data.neighborhood}, ${data.city}, ${data.state} - ${data.zip_code}`,
        };

      return null;
    },
    staleTime: 1000 * 60, // 60 seconds
  });

  return { organization: data ?? null, ...rest };
};
