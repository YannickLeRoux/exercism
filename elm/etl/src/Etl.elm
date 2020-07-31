module Etl exposing (transform)

import Dict exposing (Dict)


pair : ( Int, List String ) -> List ( String, Int )
pair ( key, values ) =
    List.map (\v -> ( String.toLower v, key )) values


transform : Dict Int (List String) -> Dict String Int
transform =
    Dict.toList
        >> List.concatMap pair
        >> Dict.fromList
