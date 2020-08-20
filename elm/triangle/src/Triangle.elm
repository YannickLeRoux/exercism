module Triangle exposing (Triangle(..), triangleKind)

import Array


type Triangle
    = Equilateral
    | Isosceles
    | Scalene


triangleKind : number -> number -> number -> Result String Triangle
triangleKind x y z =
    let
        sides =
            Array.fromList (List.sort [ x, y, z ])
    in
    if (Array.any (\side -> side < 0) ) sides)
