module Hamming exposing (distance)


count : ( Char, Char ) -> Int -> Int
count ( a, b ) dist =
    if a /= b then
        dist + 1

    else
        dist


solveDistance : String -> String -> Int
solveDistance l r =
    List.map2 Tuple.pair (String.toList l) (String.toList r)
        |> List.foldl count 0


distance : String -> String -> Result String Int
distance left right =
    if String.length left == String.length right then
        Ok (solveDistance left right)

    else
        Err "left and right strands must be of equal length"
