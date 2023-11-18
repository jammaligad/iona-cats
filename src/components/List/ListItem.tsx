export const ListItem = ({ id, name, image }) => {
  return (
    <div className="w-full rounded-xl flex items-center space-x-2 hover:bg-orange-100 hover:cursor-pointer p-2">
      <div className="w-6 h-6 drop-shadow">
        <img className="w-full h-full rounded-full" src={image?.url} />
      </div>
      <p className="font-open-sans text-yellow-950">{name}</p>
    </div>
  );
};
