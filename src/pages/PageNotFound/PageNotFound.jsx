import { useDocumentTitle } from "../../hooks/custom/index";

function PageNotFound() {
  // SET DOCUMENT TITLE
  useDocumentTitle("PageNotFound");

  // ****************************************************************************************************

  return (
    <>
      <div className="errorImage"></div>
    </>
  );
}

export { PageNotFound };
