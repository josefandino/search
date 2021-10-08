

export default function SearchResultsItems({ name, email }) {
  return (
    <div className="respuesta">
    <p><b>{ name }</b></p>
    <p>{ email }</p>
  </div>
  );
}