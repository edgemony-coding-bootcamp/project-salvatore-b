import { useRouter } from "next/router";
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
