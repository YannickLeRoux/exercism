module Anagram exposing (detect)


detect : String -> List String -> List String
detect word candidates =
    let
        res =
            []
    in
    case candidates of
        [] ->
            []

        x :: xs ->
            if isAnagram x word then
                x :: res

            else
                detect word xs


isAnagram : String -> String -> Bool
isAnagram test givenWord =
    let
        sortedTest =
            String.toLower test |> String.toList |> List.sort

        sortedWord =
            String.toLower givenWord |> String.toList |> List.sort
    in
    sortedTest == sortedWord
