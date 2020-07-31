module Test.Generated.Main3512366888 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.tests] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 388095287616478, processes = 8, paths = ["/Users/yannickleroux/Code/Learning/Exercism/elm/leap/tests/Tests.elm"]}