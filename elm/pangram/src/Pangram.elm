module Pangram exposing (isPangram)


alphabet : List Char
alphabet =
    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]


isPangram : String -> Bool
isPangram sentence =
    let
        sentenceList =
            String.toList (String.toLower sentence)
                |> List.filter Char.isAlpha
    in
    List.all (\x -> List.member x sentenceList) alphabet
