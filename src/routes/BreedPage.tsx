import { useParams } from "react-router-dom";

import useAxios from "../common/hooks/useAxios";

import { IMAGES_ENDPOINT } from "../common/endpoints";
import Card from "../components/Card";

const DEFAULT_IMAGE_LIMIT = 12;

const BreedPage = () => {
  const { id: breedID } = useParams();

  const { data: catsData, isLoading } = useAxios(
    IMAGES_ENDPOINT.url,
    IMAGES_ENDPOINT.method,
    {
      breedID,
      limit: DEFAULT_IMAGE_LIMIT,
    }
  );

  return (
    <div className="flex w-full h-screen px-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto sm:mt-8 mt-40 gap-10 auto-cols-min auto-rows-max">
        {catsData?.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
};

export default BreedPage;
