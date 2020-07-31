module Test.Generated.Main3102104003 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.tests] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 167958965059668, processes = 8, paths = ["/Users/yannickleroux/Code/Learning/Exercism/elm/pangram/tests/Tests.elm"]}