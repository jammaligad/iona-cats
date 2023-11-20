export const extractBreedInformation = (data) => {
  if (!data) {
    return null
  }

  return data.filter(({ id }) => id).map(({ id, breeds, url }) => {
    const [breedData] = breeds

    return {
      id,
      name: breedData.name,
      origin: breedData.origin,
      temperament: breedData.temperament,
      description: breedData.description,
      imageUrl: url
    }
  })
}