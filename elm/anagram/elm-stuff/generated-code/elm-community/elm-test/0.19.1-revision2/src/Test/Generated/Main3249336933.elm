module Test.Generated.Main3249336933 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.tests] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 7930545078594, processes = 8, paths = ["/Users/yannickleroux/Code/Learning/Exercism/elm/anagram/tests/Tests.elm"]}