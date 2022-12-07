import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const {title,imgUrl} = category;
  return (
    <>
      <div className="category-container">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="background-image"
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>shop now</p>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
