import { useDocumentTitle } from "../../hooks/custom/index";
var errorImage = require("../../assets/images/404_error.svg");

function PageNotFound() {
  // SET DOCUMENT TITLE
  useDocumentTitle("PageNotFound");

  // ****************************************************************************************************

  return (
    <>
      <div className="error-image">
        <img
          className="image-responsive"
          src={errorImage.default}
          alt="404 error"
        />
      </div>
    </>
  );
}

export { PageNotFound };
