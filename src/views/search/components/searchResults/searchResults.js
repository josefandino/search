import SearchResultsItems from './searchResultsItems';
import './searchResult.css';


export default function SearchResult({ results, isSearching }) {
  return (
    <div className="search-results">
      {!results?.length && isSearching && <p className="error"> No Existen resultados, prueba con un valor diferente </p>}
      {results?.map((value) =>
        <SearchResultsItems
          key={ value.id }
          // name={ value.name }
          // email={ value.email }
          { ...value }
        />
      )}
      
    </div>
  );
}