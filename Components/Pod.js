// import music from "../assets/music.mp3";
import styles from "../styles/Podcast.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import podimage from "../assets/podcast1.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PodCast({ Data, Index }) {
  const router = useRouter();
  const { params = [] } = router.query;
  //   console.log(params);
  // state
  const [trackIndex, setTrackIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  useEffect(() => {
    if (trackIndex != Index) {
      audioPlayer.current.pause();
    }
  }, [trackIndex]);
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      setTrackIndex(Index);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      setTrackIndex(-1);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(Number(progressBar.current.value) - 5);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(Number(progressBar.current.value) + 5);
    changeRange();
  };
  const miniPod = ({ Data }) => (
    <div className={styles.MiniaudioPlayer}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.Image}
          src={podimage}
          width={100}
          height={100}
          alt="newImage"
        />
      </div>
      <div className={styles.audio}>
        <h2 className={styles.Title}>{Data.title}</h2>
        <audio ref={audioPlayer} src={Data.data} preload="metadata"></audio>
        {/* <audio
          ref={audioPlayer}
          src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
        preload="metadata" 
        ></audio> */}
        <div className={styles.playerSlider}>
          <button
            onClick={togglePlayPause}
            className={styles.play_pause}
            style={{ margin: "0px 10px 0px 0px" }}
          >
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <div>
            {/* <div className={styles.currentTime}>{calculateTime(currentTime)}</div> */}
            <input
              type="range"
              className={styles.progressBar}
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>
          {/* <div className={styles.duration}>
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div> */}
        </div>
      </div>

      {/* <ReactAudioPlayer className="audioplayer" src={Data} controls Index="1" /> */}
    </div>
  );

  const MircoPod = ({ Data }) => (
    <div className={styles.MircoaudioPlayer}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.Image}
          src={podimage}
          width={400}
          height={400}
          alt="newImage"
        />
      </div>
      <div className={styles.audio}>
        <h2 className={styles.Title}>Title of PodCast</h2>
        <audio ref={audioPlayer} src={Data} preload="metadata"></audio>
        {/* <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
      preload="metadata" 
      ></audio> */}
        <div className={styles.playerBtn}>
          <button className={styles.forward_backward} onClick={backThirty}>
            <BsArrowLeft />5
          </button>
          <button onClick={togglePlayPause} className={styles.play_pause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <button className={styles.forward_backward} onClick={forwardThirty}>
            5<BsArrowRight />
          </button>
        </div>
        <div className={styles.playerSlider}>
          {/* <div className={styles.currentTime}>{calculateTime(currentTime)}</div> */}

          <input
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />

          <div className={styles.duration}>
            {duration && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>
      </div>

      {/* <ReactAudioPlayer className="audioplayer" src={Data} controls Index="1" /> */}
    </div>
  );
  const FullViewPod = ({ Data }) => (
    <div className={styles.audioPlayer}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.Image}
          src={podimage}
          width={1000}
          height={1000}
          alt="newImage"
        />
      </div>
      <div className={styles.audio}>
        <h2 className={styles.Title}>Title of PodCast</h2>
        <audio ref={audioPlayer} src={Data} preload="metadata"></audio>
        {/* <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
      preload="metadata" 
      ></audio> */}
        <div className={styles.playerBtn}>
          <button className={styles.forward_backward} onClick={backThirty}>
            <BsArrowLeft />5
          </button>
          <button onClick={togglePlayPause} className={styles.play_pause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <button className={styles.forward_backward} onClick={forwardThirty}>
            5<BsArrowRight />
          </button>
        </div>
        <div className={styles.playerSlider}>
          <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

          <input
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />

          <div className={styles.duration}>
            {duration && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>
      </div>

      {/* <ReactAudioPlayer className="audioplayer" src={Data} controls Index="1" /> */}
    </div>
  );

  if (params.length > 1) {
    return MircoPod({ Data });
  }
  if (params.length == 0) {
    return miniPod({ Data });
  }

  return <h1>No Data Found</h1>;
}
