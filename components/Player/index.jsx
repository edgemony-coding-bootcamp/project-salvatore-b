import styles from "./styles.module.scss";
// import Image from "next/image";
import {
  AiFillPlayCircle,
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiFillPauseCircle,
} from "react-icons/ai";

import { BsVolumeDownFill } from "react-icons/bs";
import { useState } from "react";

export default function Player() {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };


  return (
    <div className={styles.player_all}>
      <div className={styles.img_container}>{/* <Image /> */}</div>
      <div className={styles.player_container}>
        <div className={styles.icons_player}>
          <button className={styles.forwardBackward_btn}>
            <AiOutlineStepBackward />
          </button>
          <button className={styles.play_pause_btn} onClick={togglePlayPause}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </button>
          <button className={styles.forwardBackward_btn}>
            <AiOutlineStepForward />
          </button>
        </div>
        <div className={styles.timing_player}>
          <div className={styles.start_timing}>0:00</div>
          <input type="range" className={styles.bar_range}></input>
          <div className={styles.toEnd_timing}>3:00</div>
        </div>
      </div>
      <div className={styles.volume_container}>
        <button className={styles.volume_btn}>
          <BsVolumeDownFill />
        </button>
        <input type="range" className={styles.bar_range}></input>
      </div>
    </div>
  );
}
