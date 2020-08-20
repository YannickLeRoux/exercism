module CollatzConjecture (collatz) where

collatz :: Integer -> Maybe Integer
collatz n | n < 1 = Nothing
          | otherwise = Just (recurse n)

recurse :: Integer -> Integer
recurse 1 = 0
recurse n | n `rem` 2 == 0 = recurse (n `div` 2) + 1
          | otherwise = recurse ( 3 * n + 1) + 1