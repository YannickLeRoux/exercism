module Test.Generated.Main2728413872 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.tests] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 302518104971103, processes = 8, paths = ["/Users/yannickleroux/Code/Learning/Exercism/elm/bob/tests/Tests.elm"]}