module Raindrops exposing (raindrops)


raindrops : Int -> String
raindrops n =
    List.map2 (transform n) [ "Pling", "Plang", "Plong" ] [ 3, 5, 7 ]
        |> handleResult n


transform : Int -> String -> Int -> String
transform num str div =
    case remainderBy div num of
        0 ->
            str

        _ ->
            ""


handleResult : Int -> List String -> String
handleResult num list =
    case String.length (String.join "" list) of
        0 ->
            String.fromInt num

        _ ->
            String.join "" list
