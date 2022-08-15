import React from 'react'

const Card = () => {
  return (
      <div className='container-fluid'>
        <div className='row justify-content-center mt-3'>
            <div className='col-3'>
            <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">Active Users</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>

            <div className='col-3'>
            <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">Number of Users</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>

            <div className='col-3'>
            <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">Number of Posts</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Card;