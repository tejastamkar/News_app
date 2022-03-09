import { Data } from "../Data/Data";

export default function Tables({ TableIndex }) {
  console.log(Data[0]);

  switch (TableIndex) {
    case 1:
      return AllArticleTable();
    case 2:
      return AllArticleTable();
    case 3:
      return AllArticleTable();
    case 6:
      return AllArticleTable();
    case 4:
      return Podcast();
    default:
      return <div>No table found</div>;
  }
}
function AllArticleTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Name</th>
            <th>Title</th>
            <th>Url</th>
            <th>UrlToImage</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.class}</td>
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Podcast() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.class}</td>
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
