import Mrd from "./mcrd";
import Search from "./search";

function SearchPage() {
  return (
    <div>
      <Search />
      <Mrd isSearch={true} />
    </div>
  );
}

export default SearchPage;