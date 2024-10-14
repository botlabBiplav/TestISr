"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../../../lib/utils";
import { Button } from "../../../../@/components/ui/button";
import { Calendar } from "../../../../@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../@/components/ui/popover";

const DatePicker = ({selectedDate}) => {
  const [getdate, setGetDate] = React.useState();

  React.useEffect(()=>{
    function formatDate(dateString) {
      // Parse the date string into a Date object
      const date = new Date(dateString);
      
      // Get the year, month, and day from the Date object
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
      const day = String(date.getDate()).padStart(2, '0');
      
      // Format the date as YYYY-MM-DD
      return `${year}-${month}-${day}`;
    }

    let dateFormate = formatDate(getdate);
    selectedDate(dateFormate);
    console.log(getdate,'datafoundsd')
  },[getdate,selectedDate])

  // bg-black text-white xl:py-4 lg:py-3 py-[8px] lg:text-2xl text-sm

  return (
    <>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left font-normal xl:w-[340px] lg:w-[340px] w-[180px] xl:!h-16 lg:!h-14 rounded-none",
            !getdate && "text-muted-foreground bg-black hover:bg-black hover:text-white"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {getdate ? format(getdate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={getdate}
          onSelect={setGetDate}
          className=" border"
          />
      </PopoverContent>
    </Popover>
    </>
  );
};

export default DatePicker;
