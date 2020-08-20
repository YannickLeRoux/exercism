{-# LANGUAGE LambdaCase #-}

module DNA (toRNA) where

transform :: Char -> Either Char Char
transform =
  \case
    'G' -> Right 'C'
    'C' -> Right 'G'
    'T' -> Right 'A'
    'A' -> Right 'U'
    char -> Left char

toRNA :: String -> Either Char String
toRNA str = traverse transform str