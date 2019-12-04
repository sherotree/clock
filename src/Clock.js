import React, { useState } from 'react'
import './Clock.css'

export function Clock() {
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const [height, setHeight] = useState(null)
  const [meight, setMeight] = useState(null)
  const [seight, setSeight] = useState(null)

  function tick() {
    let newDate = new Date()
    setHours(newDate.getHours())
    setMinutes(newDate.getMinutes())
    setSeconds(newDate.getSeconds())
    setHeight((hours / 24) * 100)
    setMeight((minutes / 60) * 100)
    setSeight((seconds / 60) * 100)
  }

  setInterval(tick, 1000)
  return (
    <div className="wrapper">
      <div className="hours">{hours}</div>
      <div className="minutes">{minutes}</div>
      <div className="seconds">{seconds}</div>
      <div className="overlay ">
        <div
          className="hours Column Marker"
          style={{ height: { height } + '%', opacity: height / 100 }}
        >
          {hours}
        </div>
        <div
          className="minutes Column Marker"
          style={{ height: { meight } + '%', opacity: meight / 100 }}
        >
          {minutes}
        </div>
        <div
          className="seconds Column Marker"
          style={{ height: { seight } + '%', opacity: seight / 100 }}
        >
          {seconds}
        </div>
      </div>
    </div>
  )
}
