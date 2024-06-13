import { useRef, useEffect, useState } from "react";
import wavesurfer from "wavesurfer.js";
import "./FrequencyChart.scss";
// @ts-ignore
import demoAudio from "../../../assets/demo_audio.wav";

const FrequencyChart = () => {
  const audioRef = useRef<HTMLHeadingElement>(null);
  const [audioTrack, setAudioTrack] = useState();
  const waveColors: any = ["#BD212F", "#38B64A", "#608942", "#974C37", "rgba(0,255,255,.5)"];
  const progressColor: any = ["#BD212F", "#38B64A", "#608942", "#974C37", "rgba(0,255,255,.5)"];

  useEffect(() => {
    if (audioRef.current && !audioTrack) {
      const track: any = wavesurfer.create({
        container: audioRef.current,
        waveColor: waveColors,
        progressColor: progressColor,
        barHeight: 2,
      });
      track.load(demoAudio);
      setAudioTrack(track);
    }
  }, [audioRef]);

  return <>{audioRef && <div id="waveform" className="audio" ref={audioRef}></div>}</>;
};

export default FrequencyChart;
