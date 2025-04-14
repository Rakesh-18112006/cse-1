



const Frame = ({name,qual,description,img,url}) => {
    return(
        <div style = {{
            // paddingTop : '130px',
            // paddingleft : '50px',
            width : '20rem',
            

            
            
         }}>
    <div className="card" style={{ width : '18rem',}}>
  <img src={img} className="card-img-top" alt={img}/>
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h5 className="card-title">{qual}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">More Info </a>
  </div>
</div>
        </div>
    );
}
export default Frame;