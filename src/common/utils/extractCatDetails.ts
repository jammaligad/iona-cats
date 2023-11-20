// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractCatDetails = (data: Record<string, any>) => {
  const [breed] = data?.breeds || [];

  return {
    id: data?.id,
    name: breed?.name,
    imageUrl: data?.url,
    origin: breed?.origin,
    temperaments: breed?.temperament.split(",").map((t: string) => t.trim()),
    description: breed?.description,
  };
};
