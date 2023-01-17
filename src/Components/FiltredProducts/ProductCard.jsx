import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";



const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  


  return (
    <>
    <Link to={"/filteredProducts/${type}/" + id}>
      <Card className=' card text-info ' onClick={() => dispatch(singleProduct(id))}>
      <Card.Img src={img} alt="img-blur-shadow" className="card__img" variant="top" />
      <Card.Body  className="text-center">
        <Card.Title variant="h5" className="mb-2 h3 font-bold"> {name}</Card.Title>
        <Card.Text >
        {text.slice(0,20)+"..."}
        </Card.Text>
        <div className=' d-flex justify-between m-1  align-items-center '>
        <Card.Text className='card__price h5  text-info'>
          {price}₴
        </Card.Text>
        <Card.Text variant="small" color="gray" className=" flex gap-1 m-0">
        {colors?.map((color, index) => {
              return (
                <i
                  className=" fa-sm mt-[10px] rounded-circle p-2 mb-2.5 "
                  key={index}
                  style={{backgroundColor: color}}
                ></i>
              );
            })}
        </Card.Text></div>
      </Card.Body>
    </Card>
    </Link>
    </>
  );
};

export default ProductCard;