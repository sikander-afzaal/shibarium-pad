import Description from "./Description";
import Details from "./Details";

const DetailsIndex = ({ content }) => {
  return (
    <div className="w-full pb-[150px]">
      <Details content={content.hero} />
      <Description content={content.desc} />
    </div>
  );
};

export default DetailsIndex;
