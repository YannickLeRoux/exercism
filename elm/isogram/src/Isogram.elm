module Isogram exposing (isIsogram)

import Set


isIsogram : String -> Bool
isIsogram sentence =
    let
        lowerS =
            String.toLower sentence
    in
    Set.size (Set.fromList (String.toList lowerS)) == String.length lowerS
