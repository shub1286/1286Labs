import { PaginationStyle } from "./style";


export default function Pagination (){
    return(
            <PaginationStyle className="pagination">
              <li className="page-item" aria-current="page">
                <a className="page-link active" href="#">1</a>
              </li>
              <li className="page-item" >
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">5</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">...</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">14</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </PaginationStyle>
    )
}