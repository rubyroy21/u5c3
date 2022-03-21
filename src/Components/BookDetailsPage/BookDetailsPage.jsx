import {useParams} from "react-router"
import {useState, useEffect} from "react"
import axios from "axios"


export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const [data, setData] = useState([])
  const {Title} = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${Title}`).then((e) => {
      setData(e.data)
    })
  }, [Title])

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{data.Title}
        </h2>
        <img className="image" src={data.book_image} alt="#" />
        <div className="author">{data.Author}</div>
        <div className="description">{data.Description}</div>
        <div className="price">{data.Price}</div>
        <div className="section">{data.Section}</div>
        <div className="isbnNumber">{data.ISBN_Number}</div>
        <ul className="reviews">
        {data.review}
        </ul>
      </div>
    </>
  );
};
