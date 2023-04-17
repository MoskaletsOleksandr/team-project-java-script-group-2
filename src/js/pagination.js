import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
const TUI_VISIBLE_PAGES = 4;


export function createPagination(totalItems, visiblePages) {
 const options = {
   itemsPerPage: 20,
   totalItems: totalItems,
   visiblePages: visiblePages < 4 ? visiblePages : TUI_VISIBLE_PAGES,
 };


 const pagination = new Pagination(refs.pagination, options);


 if (visiblePages > 1) {
   refs.pagination.style.display = 'block';
 } else {
   refs.pagination.style.display = 'none';
 }


 return pagination;
}
