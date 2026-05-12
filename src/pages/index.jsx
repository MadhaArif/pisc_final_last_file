import { useEffect, useState } from "react";
import Image from "next/image";
import HomeUniversity from "../components/homes/home-university";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function Home() {
  const [data, setData] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "other";

  // get data from google excel sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
        );
        const result = await response.json();
        result?.values?.shift();
        setData(result?.values?.splice(0, 3));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Modal }) => {
        const modalElement = document.getElementById("exampleModal");
        if (modalElement) {
          const modal = new Modal(modalElement);
          modal.show();
        }
      });
    }, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper>
      {data.length && data?.[0]?.[0] && data[0][0] !== "0" && (
        <div
          style={{ margin: "100px 0 0" }}
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "absolute",
                  right: "-50px",
                  color: "var(--color-secondary) !important",
                }}
              ></button>

              <div className="modal-body">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={`/assets/images/course/${data[0][0]}`}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <SEO pageTitle={"Home"} />
      <HomeUniversity />
    </Wrapper>
  );
}
