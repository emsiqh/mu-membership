type Props = {
  name: string;
  position: string;
  age: number;
  image?: string;
};

const Player = ({ name, position, age, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[17rem] md:h-[18rem] max-w-[18rem]  md:min-w-full w-96 rounded-xl flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-300 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-72 w-96">
      <div className={overlayStyles}>
        <p className="text-2xl capitalize">{name}</p>
        <p className="mt-3 text-lg">Position: {position}</p>
        <p className="mt-3">AGE: {age}</p>
      </div>
      <img
        className="max-h-full max-w-[18rem] rounded-xl md:min-w-full"
        alt={`${image}`}
        src={image}
      />
    </li>
  );
};

export default Player;
