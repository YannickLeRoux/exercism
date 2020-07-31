module Test.Generated.Main3343441040 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.tests] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 87095348720588, processes = 8, paths = ["/Users/yannickleroux/Code/Learning/Exercism/elm/collatz-conjecture/tests/Tests.elm"]}