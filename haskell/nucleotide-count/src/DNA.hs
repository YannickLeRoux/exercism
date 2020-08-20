module DNA (nucleotideCounts, Nucleotide (..)) where

import Data.Map.Strict (Map)

data Nucleotide = A | C | G | T deriving (Eq, Ord, Show)

fromString :: Char -> Either String Nucleotide
fromString 'A' = Right A
fromString 'C' = Right C
fromString 'G' = Right G
fromString 'T' = Right T
fromString _ = Left "Not a nucleotide"

-- checkNucleoide

nucleotideCounts :: String -> Either String (Map Nucleotide Int)
nucleotideCounts xs = map fromString xs

-- map over the string
-- make a list of Either .... maybe ?
-- pour chaque char return 1/ a left 2 / a right that contains the updated map
