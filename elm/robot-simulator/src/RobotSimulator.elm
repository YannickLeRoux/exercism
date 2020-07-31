module RobotSimulator exposing
    ( Bearing(..)
    , Robot
    , advance
    , defaultRobot
    , simulate
    , turnLeft
    , turnRight
    )


type Bearing
    = North
    | East
    | South
    | West


type alias Robot =
    { bearing : Bearing
    , coordinates : { x : Int, y : Int }
    }


defaultRobot : Robot
defaultRobot =
    { bearing = North
    , coordinates = { x = 0, y = 0 }
    }


turnRight : Robot -> Robot
turnRight robot =
    case robot.bearing of
        North ->
            { robot | bearing = East }

        South ->
            { robot | bearing = West }

        East ->
            { robot | bearing = South }

        West ->
            { robot | bearing = North }


turnLeft : Robot -> Robot
turnLeft robot =
    case robot.bearing of
        North ->
            { robot | bearing = West }

        South ->
            { robot | bearing = East }

        East ->
            { robot | bearing = North }

        West ->
            { robot | bearing = South }


advance : Robot -> Robot
advance robot =
    let
        coord =
            robot.coordinates
    in
    case robot.bearing of
        North ->
            let
                newCoord =
                    { coord | y = coord.y + 1 }
            in
            { robot | coordinates = newCoord }

        South ->
            let
                newCoord =
                    { coord | y = coord.y - 1 }
            in
            { robot | coordinates = newCoord }

        East ->
            let
                newCoord =
                    { coord | x = coord.x + 1 }
            in
            { robot | coordinates = newCoord }

        West ->
            let
                newCoord =
                    { coord | x = coord.x - 1 }
            in
            { robot | coordinates = newCoord }


simulate : String -> Robot -> Robot
simulate directions robot =
    List.foldl move robot (String.toList directions)


move : Char -> Robot -> Robot
move c r =
    case c of
        'L' ->
            turnLeft r

        'R' ->
            turnRight r

        'A' ->
            advance r

        _ ->
            r
