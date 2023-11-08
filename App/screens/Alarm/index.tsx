import React, { useEffect, useState } from 'react'
import AlarmView from './AlarmView'
import { useTimeContext } from '../../contexts/TimeContext'

export default function Alarm() {
  return (
    <AlarmView />
  )
}
