module Bob exposing (..)

import Char
import List


type Words
    = ShoutQuestion
    | Question
    | Shout
    | Silence
    | Whatever


isAlpha : Char -> Bool
isAlpha char =
    Char.isUpper char || Char.isLower char


isWhitespace : String -> Bool
isWhitespace string =
    string
        |> String.trim
        |> String.isEmpty


isQuestion : String -> Bool
isQuestion string =
    string
        |> String.trim
        |> String.endsWith "?"


isShouting : String -> Bool
isShouting string =
    string
        == String.toUpper string
        && String.any isAlpha string


hey : String -> String
hey words =
    let
        question : Words
        question =
            if isShouting words then
                if isQuestion words then
                    ShoutQuestion

                else
                    Shout

            else if isQuestion words then
                Question

            else if isWhitespace words then
                Silence

            else
                Whatever
    in
    case question of
        ShoutQuestion ->
            "Calm down, I know what I'm doing!"

        Shout ->
            "Whoa, chill out!"

        Question ->
            "Sure."

        Silence ->
            "Fine. Be that way!"

        Whatever ->
            "Whatever."
