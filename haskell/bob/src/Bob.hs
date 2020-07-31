module Bob
  ( responseFor,
  )
where

import Data.Char

responseFor :: String -> String
responseFor chars
  | isShouting && isQuestion = "Calm down, I know what I'm doing!"
  | isShouting = "Whoa, chill out!"
  | isQuestion = "Sure."
  | isSilence = "Fine. Be that way!"
  | otherwise = "Whatever."
  where
    isSilence
      | chars == "" = True
      | otherwise = words chars == []

    isQuestion
      | isSilence = False
      | otherwise = (last . last . words $ chars) == '?'

    isShouting = chars == map toUpper chars && any isAlpha chars
