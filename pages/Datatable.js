import DropBoxInput from "../Components/dropbox";
import Footer from "../Components/Footer";
import Navbar from "../Components/navBar";
import Tables from "../Components/tables";

export default function Datatable() {
  const DropBoxRef = DropBoxInput();
  const DropBoxRefJSX = DropBoxRef.DropBoxInputJsx;
  const DropBoxRefValue = DropBoxRef.Dropboxvalue;

  return (
    <div>
      <Navbar />
      <DropBoxRefJSX />
      <Tables TableIndex={DropBoxRefValue}/>
      <Footer />
    </div>
  );
}
