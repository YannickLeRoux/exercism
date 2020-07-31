module CollatzConjecture exposing (collatz)


collatz : Int -> Result String Int
collatz start =
    if start < 1 then
        Err "Only positive numbers are allowed"

    else
        Ok (recurse start)


recurse : Int -> Int
recurse num =
    case num of
        1 ->
            0

        n ->
            case remainderBy 2 n of
                0 ->
                    recurse (n // 2) + 1

                _ ->
                    recurse (3 * n + 1) + 1
