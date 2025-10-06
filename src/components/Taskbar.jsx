import { useState, useEffect, useRef } from "react"

export default function Taskbar() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  )
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5) // default volume
  const audioRef = useRef(null)
  const base = import.meta.env.BASE_URL
  console.log('hey now brown cow cow cow')
  const imagePath = ''
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      )
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full h-8 bg-gray-300 border-t border-gray-400 flex items-center justify-between text-xs font-sans z-20">

      {/* Start button */}
      <button
        className="flex items-center h-full px-2 bg-gray-200
          border border-gray-600 border-t-white border-l-white
          active:border-t-gray-600 active:border-l-gray-600 
          active:border-b-white active:border-r-white"
      >
        <img src={`${imagePath}windows-icon.png`} alt="Start" className="w-4 h-4 mr-1" />
        Start
      </button>

      {/* Right side: system tray + clock */}
      <div className="flex items-center space-x-2 pr-2 h-full">

        {/* Volume icon (play/pause) */}
        <button
          onClick={toggleAudio}
          className="h-full px-1 flex items-center justify-center bg-gray-200 
            border border-gray-600 border-t-white border-l-white"
        >
          <img
            src={`${imagePath}/loudspeakerRays0.png`}
            alt="Volume"
            className="w-4 h-4"
          />
        </button>

        {/* Volume slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20"
        />

        {/* Hidden audio player */}
        <audio ref={audioRef} src={`${imagePath}music1.mp3`} />

        {/* Clock */}
        <div className="h-full px-2 flex items-center bg-gray-200 font-mono 
          border border-gray-600 border-t-white border-l-white"
        >
          {time}
        </div>
      </div>
    </div>
  )
}
