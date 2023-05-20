use actix_files::{Files, NamedFile};
use actix_web::{App, HttpServer, Responder, get};
use std::path::PathBuf;

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    #[get("/martin")]
    async fn martin() -> impl Responder {
        let path: PathBuf = PathBuf::from("./static/index.html");
        NamedFile::open(path).unwrap()
    }

    HttpServer::new(|| {
        App::new()
            .service(martin)
            .service(Files::new("/", "./static"))
    })
        .bind("127.0.0.1:8000")?
        .run()
        .await
}