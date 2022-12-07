import Directory from '../../components/directory/directory.components.jsx';

const Home = ()=>{
  const categories =[
    {
      id:1,
      title:'Hats',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRw58K7CL2x7kfI0GPuXgv_HH6_YvxKowmA&usqp=CAU'
    },{
      id:2,
      title:'Jackets',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS-fksZJSw1fV4FvGhqLMIZESldtCwe-uMg&usqp=CAU'
    },{
      id:3,
      title:'Sneakers',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjzhv3oQ6WlWPKD8IXVWYH2IsISNKwTWorA&usqp=CAU'
    },{
      id:4,
      title:'Womans',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiLoX_r_uiKxioHoQqUHjG-K9C5ShOksfaw&usqp=CAU'
    },{
      id:5,
      title:'Mens',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWpMODEzjRZvLFL091MntAPwNcoro5idW8g&usqp=CAU'
    }
  ]
  return (
    <Directory categories={categories}/>
  );
}
export default Home;