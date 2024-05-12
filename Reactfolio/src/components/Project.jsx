function Project({ title, description, imageURL }) {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>{title}</h2>
            <p>{description}</p>
            <p><a className="btn btn-default" href="https://github.com/VicSwain/Hunter-s-Path" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-md-6">
          <h2>{title}</h2>
            <p>{description}</p>
            <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
         </div>
         
        </div>
  
        
  

      </div>
    );
}

export default Project;