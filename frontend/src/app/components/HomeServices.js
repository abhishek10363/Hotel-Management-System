export default function HomeServices(){
    return(
      <section className="container my-5">
        <h2 className="my-5 text-center fw-bold">Services</h2>
        <div className="row text-center">

            <div className="col-4">
                <div className="card-body">
                    <img src="thumb/hkeep.png" class="card-img-top" alt="Room Type" />
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title ">Room Type</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card-body">
                    <img src="thumb/roomservice.png" class="card-img-top" alt="Events" />
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title ">Events</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card-body">
                    <img src="thumb/sup.png" class="card-img-top" alt="Online Booking" />
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title ">Online Booking</h5>
                    </div>
                </div>
            </div>
          
        </div>
      </section>
    );
}