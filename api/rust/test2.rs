use http::StatusCode;
use now_lambda::{error::NowError, lambda, IntoResponse, Request, Response};
use std::error::Error;
use util::print_foo;

fn handler(_: Request) -> Result<impl IntoResponse, NowError> {
  print_foo();
  let response = Response::builder()
    .status(StatusCode::OK)
    .header("Content-Type", "text/plain")
    .body("user endpoint blar test 2")
    .expect("Internal Server Error");

  Ok(response)
}

// Start the runtime with the handler
fn main() -> Result<(), Box<dyn Error>> {
  Ok(lambda!(handler))
}
