import slide1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Card = () => {
  const cardMenu = (
    <>
      <figure className="px-10 pt-10">
        <img src={slide1} alt="" className="rounded-xl h-64 w-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions">
          <button className="btn btn-primary uppercase">Add to card</button>
        </div>
      </div>
    </>
  );
  return (
    <section>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className=" flex space-x-10 w-auto">
        <div className="card w-96 bg-base-100 shadow-md">{cardMenu}</div>
        <div className="card w-96 bg-base-100 shadow-md">{cardMenu}</div>
        <div className="card w-96 bg-base-100 shadow-md">{cardMenu}</div>
      </div>
    </section>
  );
};

export default Card;
