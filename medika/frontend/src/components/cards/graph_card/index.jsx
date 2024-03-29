import ChartGraph from "../../chart";

function GraphCard({ years }) {
  years = ["2023", "2022"];
  const yearsList = years.map((year) => {
    return (
      <>
        <button className="flex bg-emerald-500 rounded-full p-2">{year}</button>
      </>
    );
  });

  return (
    <>
      <div className="flex flex-col justify-center bg-background rounded-b-lg p-4">
        <p>Données concernant les différents poids pendant l année</p>
        <div className="YearsGraph flex gap-4 m-2">{yearsList}</div>
          <ChartGraph/>

      </div>
    </>
  );
}

export default GraphCard;
