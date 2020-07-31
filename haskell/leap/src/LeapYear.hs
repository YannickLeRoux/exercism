module LeapYear
  ( isLeapYear
  )
where

isLeapYear :: Integer -> Bool
isLeapYear year =
  let isYearDivBy divisor = rem year divisor == 0
  in  isYearDivBy 4 && (not (isYearDivBy 100) || isYearDivBy 400)

