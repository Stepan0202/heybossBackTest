//Hooks
import { useEffect, useState } from 'react';

//bootstrap
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxNzE3MjM1LCJleHAiOjE3MDQzMDkyMzV9.-cCeYfvzEzEG3H44S9hXNz2ie4qIabt-WEdcru7Ke-I';
/*Images */
import Expand from '../img/icons/expand.svg';
import CategoryIcon from '../img/icons/category_manual.svg';
import Delete from '../img/icons/delete.svg';
import Edit from '../img/icons/edit.svg';

/*Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
// Request API. 


export default function TableCustom(){
    const [data, setData] = useState();
    const [pagesCount, setPagesCount] = useState();
    const [rowsPerPage, setRowsPerPage] = useState();
    const [paginationElements, setPaginationElements] = useState();
    const [activePageNum, setActivePageNum] = useState();

    const rowsPerPageSelector = document.querySelector("#pagination__rowsCount");
    if(rowsPerPageSelector) rowsPerPageSelector.addEventListener('change', (event) => {
      setRowsPerPage(event.target.value);
      setPagesCount(MATH.ceil(data.data.length/event.target.value))
    
    });
    async function getData(activePageNum, rowsPerPage){
      console.log(activePageNum)
      if(activePageNum && rowsPerPage){
        const response = await fetch(`http://localhost:1337/api/goods?pagination[page]=${activePageNum}&pagination[pageSize]=${rowsPerPage}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
         const responseData = await response.json();
         setData(responseData);
         console.log(responseData)
      }

    }
    useEffect(() => {
      setRowsPerPage(10);
      setPagesCount(5);
      getData(1, 10);
      console.log(data)
    }, []) 
   
    useEffect(() => {
      if (!activePageNum) setActivePageNum(1)
      let items = [];
      for (let number = 1; number <= 5; number++) {
        items.push(
          <Pagination.Item key={number} active = {number === activePageNum}>
            {number}
          </Pagination.Item>,
        );
      }
      setPaginationElements(items);
    }, [activePageNum])

    console.log(rowsPerPage)
    return (
      <>
        <h1>Catalogue</h1>
        <Table>
            <thead>
              <tr>
                <th><input type="checkbox" name="checkAll" id="checkAll" /></th>
                <th>ID</th>  
                <th>Expand</th>  
                <th>Icon</th>
                <th>Name</th>
                <th>Added at</th>
                <th>Added by</th>
                <th>Activity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              data && data.data.map((el) => {
                return <tr key={el.id}>
                  <td><input type="checkbox" name="checkAll" id="checkAll" /></td>
                  <td>{el.id}</td>
                  <td><img src={Expand} alt="More about car part"/></td>
                  <td><img src={CategoryIcon} alt="More about category" /></td>
                  <td>{el.attributes.goodName}</td>
                  <td>{el.attributes.createdAt}</td>
                  <td>TODO</td>
                  <td><input type="checkbox" name="activity" id={`activity_${el.id}`} /></td>
                  <td><img src={Edit} alt={`Edit ${el.attributes.goodName}`} /> <img src={Delete} alt={`Delete ${el.attributes.goodName}`}/></td>
                </tr>
              })
            }
            </tbody>
        </Table>
        <div className="pagination">
          <div className="pagination__container d-flex justify-content-between">
            <div className="pagination__pages d-flex">
              Page 
              <Pagination.Prev disabled = {activePageNum == 1} onClick =  {() => setActivePageNum(activePageNum-1)}/>
              <div className="pagination__pages d-flex">
                  {
                    paginationElements && paginationElements.map((el, index) =>{
                    return <><span key={index} onClick =  {() => setActivePageNum(el.key)}>{el}</span></>})
                  }
                </div>
              <Pagination.Next disabled = {activePageNum == [pagesCount]} onClick =  {() => setActivePageNum(activePageNum+1)}/>
            </div>
            <div className="pagination__displayOnPage">
              <label for="pagination__rowsCount">Display on a page</label>
              <select name="pagination__rowsCount" id="pagination__rowsCount">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
      </>
    )
}