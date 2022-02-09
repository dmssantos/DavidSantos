import WapperCards from "./style";

function Cards({ children }) {
  return (
    <div>
      <WapperCards>
        {children}
        <div className="tag" />
      </WapperCards>
    </div>
  );
}

export default Cards;
