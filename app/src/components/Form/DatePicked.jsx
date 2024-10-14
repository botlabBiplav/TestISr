import React, { useState } from 'react'
import { Calendar } from "../../../../@/components/ui/calendar"

const DatePicked = () => {
    const [date, setDate] = useState();
  return (
    <div>

    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" rounded-none border shadow"
    />
        
    </div>
  )
}

export default DatePicked