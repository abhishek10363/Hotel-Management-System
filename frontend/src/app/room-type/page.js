import Link from "next/link";


export default function Page() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center fw-bold">Room Types</h3>
            <div className="row text-center">

                <div className="col-4 mb-4">
                    <div className="card-body">
                        <Link href='/room-type'>

                            <img src="thumb/hkeep.png" class="card-img-top" alt="Room Type" />
                        </Link>
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                                <Link href='/room-type' className="text-white">Room Type 1</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card-body">
                        <img src="thumb/roomservice.png" class="card-img-top" alt="Events" />
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                            <Link href='/room-type' className="text-white">Room Type 2</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card-body">
                        <img src="thumb/sup.png" class="card-img-top" alt="Online Booking" />
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                            <Link href='/room-type' className="text-white">Room Type 3</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card-body">
                        <img src="thumb/sup.png" class="card-img-top" alt="Online Booking" />
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                            <Link href='/room-type' className="text-white">Room Type 4</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card-body">
                        <img src="thumb/sup.png" class="card-img-top" alt="Online Booking" />
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                            <Link href='/room-type' className="text-white">Room Type 5</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card-body">
                        <img src="thumb/sup.png" class="card-img-top" alt="Online Booking" />
                        <div class="card-body hms-bg-dark text-white">
                            <h5 class="card-title ">
                            <Link href='/room-type' className="text-white">Room Type 6</Link>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}