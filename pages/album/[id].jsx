import { useRouter } from "next/router";
// import styles from "./styles.module.scss";
import SingleAlbum from "../../components/SingleAlbum";






export default function AlbumId() {




  const router = useRouter();
  const { id } = router.query;


  return (
    <>

    <SingleAlbum id={id} />

    </>
  );
}
