import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { baseUrl } from "../../../config";

const neighbours = () => {
  const router = useRouter();
  const { id } = router.query;

  const [neighbourhood, setNeighbourhood] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/neighbourhoods/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setNeighbourhood(result.neighbourhoods);
        },
        (error) => {}
      );
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="titlewraper d-flex gap justify-content-between align-items-start">
          <div className="textwrapper flex7 pr-3">
            <h3 className="title fwb text-capitalize">{id}</h3>
            <p className="text-muted f14">Neighbourhood</p>
          </div>
          <Link href="/masterplan">
            <a>
              <div className="buttonwrapper flex2 d-flex justify-content-end backLink textwrapper d-inline-block">
                <div className="back btn_underlined d-inline-block f14 fwn py-2">
                  <img src="../images/icons/undo.svg" alt="" className="mr-2" />{" "}
                  Back to Masterplan
                </div>
              </div>
            </a>
          </Link>
        </div>
        {!!neighbourhood && (
          <div className="row">
            {neighbourhood.map((neighbour, index) => (
              <div className="col-md-3 col-12 mt-3" key={index}>
                <Link href={neighbour.url}>
                  <a target="_blank">
                    <div className="neighbourhood-item">
                      <img
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: "1px solid black",
                        }}
                        src={neighbour.image}
                        alt=""
                        loading="lazy"
                      />
                      <div className="title fwb text-center mt-3">
                        {neighbour.title}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default neighbours;

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${baseUrl}/neighbourhoods/${context.params.id}`);
//   const neighbourhood = await res.json();

//   const id = context.params.id;

//   return {
//     props: {
//       neighbourhood,
//       id,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${baseUrl}/neighbourhoodList`);
//   const neighbours = await res.json();
//   const ids = neighbours.map((neighbour) => neighbour.slug);
//   const paths = ids.map((id) => ({ params: { id: id } }));

//   return {
//     paths,
//     // return 404 page if the data is not found
//     fallback: false,
//   };
// };
