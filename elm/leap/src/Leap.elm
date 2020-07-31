module Leap exposing (isLeapYear)


isLeapYear : Int -> Bool
isLeapYear year =
    let
        isYearDivBy div =
            remainderBy div year == 0
    in
    isYearDivBy 4 && not (isYearDivBy 100) || isYearDivBy 400
