import { useRouter } from "next/router";
import SinglePlaylist from "../../components/SinglePlaylist";

export default function PlaylistId({ playlist }) {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <SinglePlaylist id={id} />
    </>
  );
}
